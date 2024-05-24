import { useState } from "react";
import { CopyToClipboard as Clipboard } from "react-copy-to-clipboard";
import Button from "./Button";
import TickSvg from "./svg-icon/TickSvg";
import useTimeout from "../hooks/useTimeout";
import FileCopySvg from "./svg-icon/FileCopySvg";

type CopyToClipboardProps = {
  text: string;
  onCopy?: (text: string, result: boolean) => void;
};

const CopyToClipboard = ({ text, onCopy }: CopyToClipboardProps) => {
  const [copy, setCopy] = useState(false);

  useTimeout(() => setCopy(false), copy ? 2000 : null);

  return (
    <Clipboard
      text={text}
      onCopy={(text, result) => {
        onCopy?.(text, result);
        setCopy(true);
      }}
    >
      <div className="tooltip" data-tip="Copy">
        <Button variant="primary" size="sm">
          {copy ? <TickSvg /> : <FileCopySvg />}
        </Button>
      </div>
    </Clipboard>
  );
};

export default CopyToClipboard;
