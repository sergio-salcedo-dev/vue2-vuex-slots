/**
 * @param {string} path
 * @returns {string}
 */
export const removeFirstCharacter = (path) => path.slice(1);

/**
 * @param {string} string
 * @returns {string}
 */
export const capitalize = (string) => {
  if (!string) {
    return "";
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};
