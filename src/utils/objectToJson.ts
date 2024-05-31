export function objectToJson(obj: any): string {
  try {
    const jsonStr = JSON.stringify(stringToJsObject(obj), null, 2);
    return jsonStr;
  } catch (error: any) {
    return `Error: ${error.message}`;
  }
}

function stringToJsObject(objString: string) {
  try {
    // Convert the input to a valid JSON string if it's not already
    const jsonString = objString
      .replace(/([a-zA-Z0-9_]+)\s*:/g, '"$1":') // Add quotes around keys
      .replace(/'/g, '"'); // Replace single quotes with double quotes

    const parsedObj = JSON.parse(jsonString);
    return parsedObj;
  } catch (error: any) {
    throw new Error(`Invalid JavaScript object string: ${error.message}`);
  }
}
