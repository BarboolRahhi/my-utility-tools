import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { formatJSON } from "../utils/formatJson";
import MainContainer from "../components/MainContainer";

export default function JsonFormatter() {
  const { register, getValues, setValue } = useForm();
  function handleOnChange(_: ChangeEvent<HTMLTextAreaElement>): void {
    const { inputJson } = getValues();
    const text = formatJSON(inputJson, 2);
    setValue("outputJson", text);
  }

  return (
    <MainContainer className="flex-row gap-6">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Input Json</span>
        </div>
        <textarea
          {...register("inputJson", {
            onChange: handleOnChange,
          })}
          // onChange={(e) => handleOnChange(e)}
          className="textarea textarea-bordered"
          rows={20}
          placeholder="Paste your text here"
        ></textarea>
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Formatted Json</span>
        </div>
        <textarea
          {...register("outputJson")}
          readOnly
          rows={20}
          className="textarea textarea-bordered"
          placeholder="Get Json output from here"
        ></textarea>
      </label>
    </MainContainer>
  );
}
