export function quoteText(
  text: string,
  leftQuote = `"`,
  rightQuote = `"`,
  isLineByLine = true
) {
  if (!isLineByLine) {
    return `${leftQuote}${text}${rightQuote}`;
  }
  // Split the text into an array of lines
  const lines = text.split("\n");

  // Map each line, adding a comma at the start and end of the line
  const quotedLines = lines.map((line) => `${leftQuote}${line}${rightQuote}`);

  return quotedLines.join("\n");
}
