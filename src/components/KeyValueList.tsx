import { Fragment } from "react";
import { cn } from "../utils/cn";

type CalculatorDetailsProps = {
  data: { key: string; value: string | number }[];
  className?: string;
};

export function KeyValueList({ data, className }: CalculatorDetailsProps) {
  return (
    <>
      <div className={cn("flex flex-col", className)}>
        {data &&
          data.map((detail, index) => (
            <Fragment key={detail.key}>
              <div className="divider m-0"></div>
              <div className="flex justify-between py-1">
                <span className="text-sm font-bold">{detail.key}</span>
                <span className="text-sm">{detail.value}</span>
              </div>
              {index === data.length - 1 && <div className="divider m-0"></div>}
            </Fragment>
          ))}
      </div>
    </>
  );
}
