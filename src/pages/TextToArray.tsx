import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { convertTextToArray } from "../utils/convertTextToArray";
import MainContainer from "../components/MainContainer";
import { TextArea, RadioGroup, Radio, Button, CodeViewer } from "@component/ui";

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
  };

  return (
    <MainContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row"
      >
        <TextArea
          {...register("inputText")}
          placeholder="Paste your text here"
          label="Input Text"
          className="flex-1"
          rows={10}
        />

        <div className="divider lg:divider-horizontal"></div>
        <div className="flex flex-col gap-2 flex-1">
          <RadioGroup label="Quotes">
            <Radio
              {...register("quotes")}
              label="Double"
              value="double"
              defaultChecked
            />
            <Radio {...register("quotes")} label="Single" value="single" />
          </RadioGroup>

          <RadioGroup label="Remove quotes">
            <Radio {...register("removeQuote")} label="Yes" value="yes" />
            <Radio
              {...register("removeQuote")}
              label="No"
              value="no"
              defaultChecked
            />
          </RadioGroup>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Split by</span>
            </div>
            <select {...register("splitBy")} className="select select-bordered">
              <option value={`\n`}>New Line</option>
              <option>:</option>
              <option>;</option>
              <option>,</option>
            </select>
          </label>

          <div className="flex gap-4 mt-4 lg:mt-auto">
            <Button type="submit" variant="primary" className="flex-1">
              Convert
            </Button>
            <Button
              type="button"
              variant="primary"
              style="outline"
              className="flex-1"
              onClick={clearForm}
            >
              Clear
            </Button>
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
                <CodeViewer
                  code={data.code}
                  language={data.language}
                  fileName="code"
                />
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </MainContainer>
  );
}
