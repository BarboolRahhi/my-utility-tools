import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { formatJSON } from "../utils/formatJson";
import MainContainer from "../components/MainContainer";
import TextArea from "../components/TextArea";

export default function JsonFormatter() {
  const { register, getValues, setValue } = useForm();
  function handleOnChange(_: ChangeEvent<HTMLTextAreaElement>): void {
    const { inputJson } = getValues();
    const text = formatJSON(inputJson, 2);
    setValue("outputJson", text);
  }

  return (
    <MainContainer className="lg:flex-row gap-6">
      <TextArea
        {...register("inputJson", {
          onChange: handleOnChange,
        })}
        label="Input Json"
        rows={15}
        placeholder="Paste your text here"
        className="flex-1"
      />

      <TextArea
        label="Formatted Json"
        {...register("outputJson")}
        readOnly
        rows={15}
        placeholder="Get Json output from here"
        className="flex-1"
      />
    </MainContainer>
  );
}
