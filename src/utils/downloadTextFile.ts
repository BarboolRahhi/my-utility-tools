export const downloadTextFile = (filename: string, text: string) => {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  // Clean up
  URL.revokeObjectURL(url);
};
