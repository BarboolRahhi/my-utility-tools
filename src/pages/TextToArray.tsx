import { ChangeEvent, Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { convertTextToArray } from "../utils/convertTextToArray";
import Highlight from "react-highlight";
import MainContainer from "../components/MainContainer";

export default function TextToArray() {
  const [tabData, setTabData] = useState<
    { language: string; code: string; checked?: boolean }[]
  >([]);

  const { register, getValues } = useForm({});
  function handleOnChange(_: ChangeEvent<HTMLTextAreaElement>): void {
    const { inputText } = getValues();
    const data = convertTextToArray(inputText);
    console.log(data);

    setTabData(data);
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
      </div>

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
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
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
