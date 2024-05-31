import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { objectToJson } from "../utils/objectToJson";
import Button from "../components/Button";
import MainContainer from "../components/MainContainer";
import TextArea from "../components/TextArea";
import CodeViewer from "../components/CodeViewer";

const ObjectToJsonComponent: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [jsonOutput, setJsonOutput] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    const jsonObject = objectToJson(data.jsObjectInput);
    setJsonOutput(jsonObject);
  };

  const resetForm = () => {
    reset();
    setJsonOutput(null);
  };

  return (
    <MainContainer className="p-6">
      <form
        className="flex flex-1 flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextArea
          {...register("jsObjectInput")}
          className="flex-1"
          placeholder="Paste your object here"
          rows={15}
        />
        <div className="flex gap-4 mt-4 lg:mt-auto justify-center">
          <Button type="submit" variant="primary">
            Convert
          </Button>
          <Button
            type="button"
            variant="primary"
            style="outline"
            onClick={resetForm}
          >
            Clear
          </Button>
        </div>
      </form>

      {jsonOutput && (
        <CodeViewer code={jsonOutput} language="json" className="mt-4" />
      )}
    </MainContainer>
  );
};

export default ObjectToJsonComponent;
