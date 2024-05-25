import React, { useState } from "react";
import { Language, convertJSONToType } from "../utils/convertJsonToType";
import MainContainer from "../components/MainContainer";
import Input from "../components/Input";
import Radio from "../components/Radio";
import { SubmitHandler, useForm } from "react-hook-form";
import RadioGroup from "../components/RadioGroup";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import CodeViewer from "../components/CodeViewer";
import { formatJSON } from "../utils/formatJson";

type Inputs = {
  jsonInput: string;
  language: string;
  rootName: string;
  generatorType?: string;
};

const initialFromState: Inputs = {
  jsonInput: `{
    "todoId": 1,
    "description": "Convert your json to java, ts, js, and kotlin etc.",
    "completed": true
  }`,
  language: "typescript",
  rootName: "Root",
};

const JsonToTsConverter: React.FC = () => {
  const [code, setCode] = useState("");

  const { register, handleSubmit, watch, reset, setValue } = useForm<Inputs>({
    defaultValues: initialFromState,
  });
  const language = watch("language");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { jsonInput, language, rootName, generatorType } = data;
    console.log(data);
    const code = convertJSONToType(jsonInput, language as Language, {
      rootName: rootName,
      useLombok: generatorType === "lombok",
      useRecord: generatorType === "record",
      useTypes: generatorType === "type",
    });
    setCode(code);
  };

  const resetForm = () => {
    reset();
  };

  return (
    <MainContainer className="">
      <form
        className="flex flex-1 flex-col lg:flex-row"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextArea
          {...register("jsonInput", {
            onBlur: (e) => {
              const json = formatJSON(e.target.value, 4);
              if (!json.startsWith("Error")) {
                setValue("jsonInput", json);
              }
            },
          })}
          className="flex-1"
          placeholder="Paste your text here"
          rows={15}
        />
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex flex-col flex-1 gap-4">
          <RadioGroup label="Convert to">
            <Radio {...register("language")} label="Java" value="java" />
            <Radio
              {...register("language")}
              label="TypeScript"
              value="typescript"
            />
            <Radio {...register("language")} label="Kotlin" value="kotlin" />
          </RadioGroup>

          <Input
            {...register("rootName")}
            label="Root class or interface Name"
            type="text"
          />

          {language === "java" && (
            <RadioGroup direction="vertical">
              <Radio
                {...register("generatorType")}
                label="Getter and Setter"
                value="getterSetter"
                defaultChecked
              />
              <Radio
                {...register("generatorType")}
                label="Lombok @Data"
                value="lombok"
              />
              <Radio
                {...register("generatorType")}
                label="Record classes"
                value="record"
              />
            </RadioGroup>
          )}

          {language === "typescript" && (
            <RadioGroup direction="vertical">
              <Radio
                {...register("generatorType")}
                label="Interface"
                value="getterSetter"
                defaultChecked
              />
              <Radio {...register("generatorType")} label="Type" value="type" />
            </RadioGroup>
          )}

          <div className="flex gap-4 mt-4 lg:mt-auto">
            <Button type="submit" variant="primary" className="flex-1">
              Convert
            </Button>
            <Button
              type="button"
              variant="primary"
              style="outline"
              className="flex-1"
              onClick={resetForm}
            >
              Clear
            </Button>
          </div>
        </div>
      </form>
      {code && <CodeViewer code={code} language={language} fileName="types" />}
    </MainContainer>
  );
};

export default JsonToTsConverter;
