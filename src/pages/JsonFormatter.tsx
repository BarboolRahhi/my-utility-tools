import { ChangeEvent, useState } from "react";
import { formatJSON } from "../utils/formatJson";
import MainContainer from "../components/MainContainer";
import { TextArea, CodeViewer } from "@component/ui";

export default function JsonFormatter() {
  const [outputJson, setOutputJson] = useState("");
  function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    const text = formatJSON(e.target.value, 2);
    setOutputJson(text);
  }

  return (
    <MainContainer className="lg:flex-row gap-6">
      <TextArea
        onChange={handleOnChange}
        label="Input Json"
        rows={15}
        placeholder="Paste your text here"
        className="w-full"
      />

      {outputJson && (
        <CodeViewer
          code={outputJson}
          language="json"
          className="w-full min-w-80"
        />
      )}
    </MainContainer>
  );
}
