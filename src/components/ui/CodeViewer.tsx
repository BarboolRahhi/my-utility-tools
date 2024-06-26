import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { cn } from "../../utils/cn";
import { downloadTextFile } from "../../utils/downloadTextFile";
import { useDarkMode } from "../../hooks/useDarkMode";
import { DownloadSvg } from "@component/svg-icon";
import { CopyToClipboard, Button } from "@component/ui";

type CodeViewerProps = {
  code: string;
  fileName?: string;
  className?: string;
  language?: string;
};
export const CodeViewer = ({
  code,
  className,
  fileName = "default",
  language,
}: CodeViewerProps) => {
  const handleDownload = () => {
    downloadTextFile(`${fileName}.txt`, code);
  };
  const isDark = useDarkMode();
  console.log(isDark);

  return (
    <div className={cn("relative", className)}>
      <div className="absolute top-2 right-2">
        <CopyToClipboard text={code} />
        <div className="tooltip" data-tip="Download">
          <Button
            variant="primary"
            style="outline"
            size="sm"
            className="ml-2"
            onClick={handleDownload}
          >
            <DownloadSvg />
          </Button>
        </div>
      </div>

      <SyntaxHighlighter
        className="w-full rounded-lg"
        showLineNumbers
        wrapLines
        wrapLongLines
        language={language}
        style={isDark ? atomOneDark : atomOneLight}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
