export function formatJSON(jsonString: string, indentLevel = 2) {
  try {
    // Parse the JSON string to check if it's valid
    const jsonObject = JSON.parse(jsonString);

    // Convert the JSON object back to a formatted JSON string
    const formattedJSON = JSON.stringify(jsonObject, null, indentLevel);

    return formattedJSON;
  } catch (error: any) {
    // If there is an error in parsing, return the error message
    return `Error: Invalid JSON string - ${error.message}`;
  }
}
