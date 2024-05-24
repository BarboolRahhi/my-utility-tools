import React from "react";
import { cn } from "../utils/cn";

type RadioGroupProps = {
  label?: string;
  children: React.ReactNode;
  className?: string;
  error?: string;
  direction?: "vertical" | "horizontal";
};

const RadioGroup = ({
  children,
  label,
  className,
  error,
  direction = "horizontal",
}: RadioGroupProps) => {
  const flexDirection = direction === "vertical" ? "flex-col" : "flex-row";
  return (
    <div className={cn("flex flex-col", className)}>
      {label && <label className="label-text">{label}</label>}
      <div className={cn("flex gap-2", flexDirection)}>{children}</div>
      {error && (
        <div className="label">
          <span className="label-text-alt text-error">{error}</span>
        </div>
      )}
    </div>
  );
};

export default RadioGroup;
