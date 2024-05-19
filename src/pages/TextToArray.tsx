import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { convertTextToArray } from "../utils/convertTextToArray";
import Highlight from "react-highlight";
import MainContainer from "../components/MainContainer";

export default function TextToArray() {
  const [tabData, setTabData] = useState<
    { language: string; code: string; checked?: boolean }[]
  >([]);

  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = (formData: any) => {
    console.log(formData);

    const { inputText, removeQuote, quotes, splitBy } = formData;
    const data = convertTextToArray(
      inputText,
      quotes,
      removeQuote === "yes" ? true : false,
      splitBy
    );
    console.log(data);
    setTabData(data);
  };

  const clearForm = () => {
    setTabData([]);
    reset();
    console.log("hello");
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6 flex-col lg:flex-row">
          <label className="form-control flex-1">
            <div className="label">
              <span className="label-text">Input Text</span>
            </div>
            <textarea
              {...register("inputText")}
              className="textarea textarea-bordered h-80"
              placeholder="Paste your text here"
            ></textarea>
          </label>

          <div className="flex flex-col gap-2 flex-1">
            <label className="label-text">Quotes</label>
            <div className="flex gap-4">
              <div className="form-control">
                <label className="label cursor-pointer gap-3">
                  <span className="label-text">Double</span>
                  <input
                    {...register("quotes")}
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="double"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-3">
                  <span className="label-text">Single</span>
                  <input
                    {...register("quotes")}
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="single"
                  />
                </label>
              </div>
            </div>
            <label className="label-text">Remove quotes</label>
            <div className="flex gap-4">
              <div className="form-control">
                <label className="label cursor-pointer gap-3">
                  <span className="label-text">Yes</span>
                  <input
                    {...register("removeQuote")}
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="yes"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-3">
                  <span className="label-text">No</span>
                  <input
                    {...register("removeQuote")}
                    type="radio"
                    className="radio checked:bg-blue-500"
                    value="no"
                    defaultChecked
                  />
                </label>
              </div>
            </div>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Split by</span>
              </div>
              <select
                {...register("splitBy")}
                className="select select-bordered"
              >
                <option value={`\n`}>New Line</option>
                <option>:</option>
                <option>;</option>
                <option>,</option>
              </select>
            </label>
            <div className="flex gap-4 mt-auto">
              <button type="submit" className="btn btn-primary flex-1">
                Convert
              </button>
              <button
                type="button"
                className="btn btn-outline btn-primary flex-1"
                onClick={() => clearForm()}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </form>

      {tabData.length > 0 && (
        <div role="tablist" className="tabs tabs-lifted">
          {tabData.map((data) => (
            <Fragment key={data.language}>
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab"
                aria-label={data.language}
                defaultChecked={data.checked}
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6 overflow-hidden"
              >
                <Highlight className="java">{data.code}</Highlight>
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </MainContainer>
  );
}
