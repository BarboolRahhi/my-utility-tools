import { useState } from "react";
import MainContainer from "../components/MainContainer";
import TextArea from "../components/TextArea";
import ReactDiffViewer from "react-diff-viewer";
import { useDarkMode } from "../hooks/useDarkMode";
import useScreenWidth from "../hooks/useScreenWidth";

function TextCompare() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const dark = useDarkMode();
  const { lg, xl } = useScreenWidth();

  return (
    <MainContainer className="">
      <div className="flex gap-6 flex-col lg:flex-row">
        <TextArea
          label="Text 1"
          onChange={(e) => setText1(e.target.value)}
          className="flex-1"
          rows={10}
          placeholder="Paste your text here"
        />
        <TextArea
          label="Text 2"
          onChange={(e) => setText2(e.target.value)}
          rows={10}
          className="flex-1"
          placeholder="Paste your text here"
        />
      </div>

      {(text1.trim() || text2.trim()) && (
        <div className="mt-4 rounded-lg border p-2">
          <ReactDiffViewer
            useDarkTheme={dark}
            oldValue={text1}
            newValue={text2}
            showDiffOnly={false}
            splitView={lg || xl ? true : false}
          />
        </div>
      )}
    </MainContainer>
  );
}

export default TextCompare;
