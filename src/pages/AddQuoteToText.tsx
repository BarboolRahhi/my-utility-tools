import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { quoteText } from "../utils/quoteText";
import MainContainer from "../components/MainContainer";

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
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Input Text</span>
          </div>
          <textarea
            {...register("inputText", {
              onChange: handleOnChange,
            })}
            className="textarea textarea-bordered h-80"
            placeholder="Paste your text here"
          ></textarea>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Quoted Text</span>
          </div>
          <textarea
            {...register("outputText")}
            readOnly
            className="textarea textarea-bordered h-80"
            placeholder="Get quoted output from here"
          ></textarea>
        </label>
      </div>
      <div className="flex gap-5 flex-col lg:flex-row">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Left Quote</span>
          </div>
          <input
            {...register("leftQuote", {
              onChange: handleOnChange,
            })}
            type="text"
            placeholder="Type here"
            defaultValue={`"`}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Right Quote</span>
          </div>
          <input
            {...register("rightQuote", {
              onChange: handleOnChange,
            })}
            type="text"
            placeholder="Type here"
            defaultValue={`"`}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <div className="form-control">
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
        </div>
      </div>
    </MainContainer>
  );
}
