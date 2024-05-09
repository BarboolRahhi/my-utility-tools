import React, { useState } from "react";
import MainContainer from "../components/MainContainer";
import { cn } from "../utils/cn";
// import "./TextCompare.css"; // Import CSS file for styling

function TextCompare() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diff1, setDiff1] = useState<boolean[]>([]);
  const [diff2, setDiff2] = useState<boolean[]>([]);

  // Function to compare texts and highlight differences
  const compareTexts = () => {
    const lines1 = text1.split("\n");
    const lines2 = text2.split("\n");

    console.log(lines1);
    console.log(lines2);

    const maxLines = Math.max(lines1.length, lines2.length);

    const newDiffLines1 = [];
    const newDiffLines2 = [];

    // Compare lines line by line
    for (let i = 0; i < maxLines; i++) {
      const line1 = lines1[i] || "";
      const line2 = lines2[i] || "";

      // Compare lines; true if different, false if same
      newDiffLines1[i] = line1 !== line2;
      newDiffLines2[i] = line1 !== line2;
    }

    setDiff1(newDiffLines1);
    setDiff2(newDiffLines2);
  };

  return (
    <MainContainer>
      <div className="flex gap-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Text 1</span>
          </div>
          <textarea
            onChange={(e) => setText1(e.target.value)}
            className="textarea textarea-bordered"
            rows={10}
            placeholder="Paste your text here"
          ></textarea>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Text 2</span>
          </div>
          <textarea
            onChange={(e) => setText2(e.target.value)}
            rows={10}
            className="textarea textarea-bordered"
            placeholder="Paste your text here"
          ></textarea>
        </label>
      </div>
      <button className="btn btn-error self-center" onClick={compareTexts}>
        Compare
      </button>
      <div className="flex gap-4">
        <div className="highlight flex-1 p-4 rounded-lg border">
          {text1.split("\n").map((word, index) => (
            <div
              key={index}
              className={cn("min-h-6", diff1[index] ? "bg-yellow-300" : "")}
            >
              {word}
            </div>
          ))}
        </div>
        <div className="highlight flex-1 p-4 rounded-lg border">
          {text2.split("\n").map((word, index) => (
            <div
              key={index}
              className={cn("min-h-6", diff2[index] ? "bg-yellow-300" : "")}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  );
}

export default TextCompare;
