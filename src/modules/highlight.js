/**
 * Colorize keywords in code...
 * 
 * @param {string} string 
 * @param {object} colorMap 
 * @param {number} quoteCode 
 * @returns 
 */
const highlight = (string, colorMap, quoteCode) => {

  const QUOTE_REGEX = /(["'])(?:(?=(\\?))\2.)*?\1/g;
  string = string.replace(
    QUOTE_REGEX,
    (match) => `\x1b[${quoteCode}m${match}\x1b[0m`
  );

  // Color other specified words
  for (const [word, colorCode] of colorMap) {
    const startColor = `\x1b[${colorCode}m`;
    const endColor = "\x1b[0m";
    const keyPattern = new RegExp(`\\b${word}\\b`, "ig");

    string = string.replace(
      keyPattern,
      () => startColor + word + endColor
    );
  }

  return string;
};

module.exports = highlight