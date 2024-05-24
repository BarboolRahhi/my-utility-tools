export function formatJSON(jsonString: string, indentLevel = 2) {
  try {
    const jsonObject = JSON.parse(jsonString);

    const formattedJSON = JSON.stringify(jsonObject, null, indentLevel);

    return formattedJSON;
  } catch (error: any) {
    // If there is an error in parsing, return the error message
    return `Error: Invalid JSON string - ${error.message}`;
  }
}
