import { versionMeta } from "../meta/index.js";
import { replaceNpmScope } from "./helpers.js";

/**
 * Attempts to perform various mutations on package.json
 *
 * @param {string} content : ;
 * @param {Path} filePath
 * @returns {string}
 */
export function transformPackageJson(content, filePath) {
  const packageJson = JSON.parse(content);
  const {
    name,
    version,
    repository,
    bugs,
    devDependencies,
    gitHead,
    dependencies,
    ...keep
  } = packageJson;
  let newDependencies = {};
  const versionMetaSelector = `${versionMeta.selector}${versionMeta.version}`;
  Object.keys(dependencies).forEach((dep) => {
    const originalDepVersion = dependencies[dep];
    const newDepName = replaceNpmScope(dep);
    const newDepVersion =
      newDepName === dep ? originalDepVersion : versionMetaSelector;
    newDependencies[newDepName] = newDepVersion;
  });

  const additionalDependencies = {
    "@scoped-vaadin/internal-custom-elements-registry": versionMetaSelector,
  };

  newDependencies = { ...newDependencies, ...additionalDependencies };

  let oldRepository =
    repository && typeof repository === "object" ? repository : {};

  let newRepository = {
    ...oldRepository,
    ...versionMeta.repository,
  };
  if (oldRepository.directory) {
    newRepository = {
      ...newRepository,
      directory: oldRepository.directory.replace("packages/", "packages/"),
    };
  }

  let result = {
    name: replaceNpmScope(name),
    version: `${versionMeta.version}`,
    repository: newRepository,
    bugs: { ...bugs, ...versionMeta.bugs },
    ...keep,
    dependencies: newDependencies,
  };
  if (!result.publishConfig) {
    result = {
      ...result,
      publishConfig: {
        access: "public",
      },
    };
  }
  return JSON.stringify(result, null, 2) + "\n";
}
