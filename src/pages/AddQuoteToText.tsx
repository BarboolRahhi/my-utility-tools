import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { quoteText } from "../utils/quoteText";
import MainContainer from "../components/MainContainer";
import TextArea from "../components/TextArea";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";

export default function AddQuoteToText() {
  const { register, getValues, setValue } = useForm();

  function handleOnChange(_: ChangeEvent<HTMLTextAreaElement>): void {
    const { inputText, leftQuote, rightQuote, lineByLine } = getValues();
    const text = quoteText(
      inputText,
      leftQuote || `"`,
      rightQuote || `"`,
      lineByLine
    );
    setValue("outputText", text);
  }

  return (
    <MainContainer>
      <div className="flex gap-6 flex-col lg:flex-row">
        <TextArea
          {...register("inputText", {
            onChange: handleOnChange,
          })}
          label="Input Text"
          rows={10}
          className="flex-1"
          placeholder="Paste your text here"
        />

        <TextArea
          {...register("outputText")}
          readOnly
          label="Quoted Text"
          rows={10}
          className="flex-1"
          placeholder="Get quoted output from here"
        />
      </div>
      <div className="flex gap-5 flex-col items-center lg:flex-row">
        <Input
          {...register("leftQuote", {
            onChange: handleOnChange,
          })}
          type="text"
          placeholder="Type here"
          defaultValue={`"`}
          label="Left Quote"
          className="w-full"
        />
        <Input
          {...register("rightQuote", {
            onChange: handleOnChange,
          })}
          type="text"
          placeholder="Type here"
          defaultValue={`"`}
          label="Right Quote"
          className="w-full"
        />
        {/* <div className="form-control w-full">
          <div className="label">
            <span className="label-text">Line-by-Line Quoting</span>
          </div>
          <input
            {...register("lineByLine", {
              onChange: handleOnChange,
            })}
            type="checkbox"
            defaultChecked
            className="checkbox"
          />
        </div> */}
        <Checkbox
          {...register("lineByLine", {
            onChange: handleOnChange,
          })}
          defaultChecked
          label="Line-by-Line Quoting"
          className="w-full lg:mt-6"
          labelPosition="right"
        />
      </div>
    </MainContainer>
  );
}
