export function convertTextToArray(text: string) {
  const lines = text.split("\n");

  // Map each line, adding a comma at the start and end of the line
  const quotedLines = lines.map((line) => `"${line.trim()}"`);
  const arrayOfString = quotedLines.join(",\n");

  return [
    {
      language: "Java",
      code: `
var list = List.of(
    ${quotedLines.join(",\n")}
);

// With ArrayList\n
List<String> list2 = new ArrayList<>();\n
${quotedLines.map((line) => `list2.add(${line});`).join("\n")}
`,
      checked: true,
    },
    {
      language: "Javascript",
      code: `
              const list = [
                  ${arrayOfString}
              ];
          `,
    },
  ];
}
