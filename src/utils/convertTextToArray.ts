import stripIndent from "strip-indent";

export function convertTextToArray(
  text: string,
  quoteType: "single" | "double",
  removeQuote: boolean,
  splitBy: string
) {
  const lines = text.split(splitBy);

  let quote = quoteType === "single" ? `'` : `"`;
  quote = removeQuote ? "" : quote;

  // Map each line, adding a comma at the start and end of the line
  const quotedLines = lines.map((line) => `${quote}${line.trim()}${quote}`);
  const arrayOfString = quotedLines.join(",");

  return [
    {
      language: "Java",
      code: stripIndent(`
          // With Array
          String[] string = new String[] {${quotedLines.join(",")}};
          // immutable List
          var list = List.of(${quotedLines.join(",")});
          // With ArrayList
          List<String> list2 = new ArrayList<>();
          ${quotedLines.map((line) => `list2.add(${line});`).join("")}
      `),
      checked: true,
    },
    {
      language: "Javascript",
      code: stripIndent(`
        const list = [
          ${arrayOfString}
        ];
      `),
    },
  ];
}
