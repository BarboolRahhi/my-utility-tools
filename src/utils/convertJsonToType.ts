export type Language = "java" | "typescript" | "kotlin";

interface JsonOptions {
  jsonObject: any;
  rootName: string;
}

interface JsonOptionJava extends JsonOptions {
  useLombok?: boolean;
  useRecord?: boolean;
}

interface JsonOptionTypeScript extends JsonOptions {
  useTypes?: boolean;
}

type JsonConverterFn = (options: JsonOptions) => string;

export const convertJSONToType = (
  jsonInput: string,
  language: Language,
  options:
    | Omit<JsonOptionJava, "jsonObject">
    | Omit<JsonOptionTypeScript, "jsonObject">
) => {
  try {
    const jsonObject = JSON.parse(jsonInput);
    const converter = getConverter(language);
    return converter({ jsonObject: jsonObject, ...options });
  } catch (error) {
    return "Invalid JSON";
  }
};

const getConverter = (language: Language) => {
  const converter: { [key in Language]: JsonConverterFn } = {
    java: jsonToJavaClass,
    typescript: jsonToTs,
    kotlin: jsonToKotlin,
  };
  return converter[language];
};

const jsonToTs: JsonConverterFn = ({
  jsonObject,
  rootName,
  useTypes,
}: JsonOptionTypeScript) => {
  const getType = (value: any, key: string = ""): string => {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return "any[]";
      }
      const arrayType = getType(value[0], key);
      const type = getPluralName(arrayType, key);
      return `Array<${type}>`;
    }
    switch (typeof value) {
      case "string":
        return "string";
      case "number":
        return "number";
      case "boolean":
        return "boolean";
      case "object":
        if (value === null) {
          return "any";
        }
        return capitalizeFirstLetter(key);
      default:
        return "any";
    }
  };

  const generateInterface = (obj: any, interfaceName: string): string => {
    let interfaceString = "";

    if (!useTypes) {
      interfaceString += `interface ${interfaceName} {\n`;
    } else {
      interfaceString += `type ${interfaceName} = {\n`;
    }

    let nestedInterface = "";

    for (const key in obj) {
      const type = getType(obj[key], key);
      interfaceString += `    ${key}: ${type};\n`;
      const capitalizedKey = capitalizeFirstLetter(key);

      if (isNestedObject(obj, key)) {
        const nestedInterfaceName = capitalizedKey;
        nestedInterface += generateInterface(obj[key], nestedInterfaceName);
      } else if (isNestedArray(obj, key)) {
        const nestedInterfaceName = capitalizedKey.slice(0, -1);
        nestedInterface += generateInterface(obj[key][0], nestedInterfaceName);
      }
    }

    interfaceString += `}\n`;
    interfaceString += nestedInterface;

    return interfaceString;
  };

  if (Array.isArray(jsonObject)) {
    jsonObject = jsonObject[0];
  }

  return generateInterface(jsonObject, rootName);
};

const jsonToJavaClass: JsonConverterFn = ({
  jsonObject,
  rootName,
  useLombok,
  useRecord,
}: JsonOptionJava) => {
  const getType = (value: any, key: string = ""): string => {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return "List<Object>";
      }
      const arrayType = getType(value[0], key);
      const type = getPluralName(arrayType, key);
      return `List<${type}>`;
    }
    switch (typeof value) {
      case "string":
        return "String";
      case "number":
        return Number.isInteger(value) ? "Long" : "Double";
      case "boolean":
        return "Boolean";
      case "object":
        if (value === null) {
          return "Object";
        }
        return capitalizeFirstLetter(key);
      default:
        return "Object";
    }
  };

  const generateClass = (obj: any, className: string): string => {
    let classString = "";

    if (useLombok) {
      classString += `import lombok.Data;\n\n`;
      classString += `@Data\n`;
    }

    if (useRecord) {
      classString += `public record ${className}(\n`;
    } else {
      classString += `public class ${className} {\n`;
    }

    let fields = "";
    let nestedClasses = "";
    let gettersAndSetters = "";

    for (const key in obj) {
      const type = getType(obj[key], key);
      const capitalizedKey = capitalizeFirstLetter(key);
      if (useRecord) {
        fields += `    ${type} ${key},\n`;
      } else {
        fields += `    private ${type} ${key};\n`;
      }

      if (isNestedObject(obj, key)) {
        const nestedClassName = capitalizedKey;
        nestedClasses += generateClass(obj[key], nestedClassName);
      } else if (isNestedArray(obj, key)) {
        const nestedClassName = capitalizedKey.slice(0, -1); // Remove plural for class name
        nestedClasses += generateClass(obj[key][0], nestedClassName);
      }

      if (!useLombok && !useRecord) {
        gettersAndSetters += buildGetterSetter(type, key);
      }
    }

    if (useRecord) {
      classString += fields.slice(0, -2);
      classString += "\n";
      classString += "){}\n\n";
    } else {
      classString += fields.slice(0, -1);
      classString += "\n";
      classString += gettersAndSetters;
      classString += "}\n\n";
    }

    classString += nestedClasses;
    return classString;
  };

  if (Array.isArray(jsonObject)) {
    jsonObject = jsonObject[0];
  }

  return generateClass(jsonObject, rootName);
};

const jsonToKotlin: JsonConverterFn = ({
  jsonObject,
  rootName,
}: JsonOptions) => {
  const getType = (value: any, key: string = ""): string => {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return "List<Any>";
      }
      const arrayType = getType(value[0], key);
      const type = getPluralName(arrayType, key);
      return `List<${type}>`;
    }
    switch (typeof value) {
      case "string":
        return "String";
      case "number":
        return Number.isInteger(value) ? "Int" : "Double";
      case "boolean":
        return "Boolean";
      case "object":
        if (value === null) {
          return "Any";
        }
        return capitalizeFirstLetter(key);
      default:
        return "Any";
    }
  };

  const generateClass = (obj: any, className: string): string => {
    let classString = `data class ${className}(\n`;

    let nestedClasses = "";

    for (const key in obj) {
      const type = getType(obj[key], key);
      const formattedKey = key.replace(/[^a-zA-Z0-9_]/g, "_");
      classString += `    val ${formattedKey}: ${type},\n`;
      const capitalizedKey = capitalizeFirstLetter(formattedKey);

      if (isNestedObject(obj, key)) {
        const nestedClassName = capitalizedKey;
        nestedClasses += generateClass(obj[key], nestedClassName);
      } else if (isNestedArray(obj, key)) {
        const nestedClassName = capitalizedKey.slice(0, -1); // Remove plural for class name
        nestedClasses += generateClass(obj[key][0], nestedClassName);
      }
    }

    classString = classString.trim().replace(/,$/, "");
    classString += "\n)\n";
    classString += nestedClasses;
    return classString;
  };

  if (Array.isArray(jsonObject)) {
    jsonObject = jsonObject[0];
  }

  return generateClass(jsonObject, rootName);
};

function getPluralName(arrayType: string, key: string) {
  return arrayType.toLowerCase() === key && arrayType.endsWith("s")
    ? arrayType.slice(0, -1)
    : arrayType;
}

function isNestedArray(obj: any, key: string) {
  return (
    Array.isArray(obj[key]) &&
    obj[key].length > 0 &&
    typeof obj[key][0] === "object" &&
    !Array.isArray(obj[key][0]) // avoid to collect nested array type eg. [[1,2]]
  );
}

function isNestedObject(obj: any, key: string) {
  return (
    typeof obj[key] === "object" &&
    !Array.isArray(obj[key]) &&
    obj[key] !== null
  );
}

function buildGetterSetter(type: string, key: string) {
  let gettersAndSetters = "";
  const capitalizedKey = capitalizeFirstLetter(key);
  gettersAndSetters += `    public ${type} get${capitalizedKey}() {\n`;
  gettersAndSetters += `        return ${key};\n`;
  gettersAndSetters += `    }\n`;
  gettersAndSetters += `    public void set${capitalizedKey}(${type} ${key}) {\n`;
  gettersAndSetters += `        this.${key} = ${key};\n`;
  gettersAndSetters += `    }\n`;
  return gettersAndSetters;
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
