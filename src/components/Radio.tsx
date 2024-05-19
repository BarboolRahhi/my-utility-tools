import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

type RadioTypes = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = forwardRef(
  (
    { label, className, ...props }: RadioTypes,
    ref: React.ForwardedRef<any>
  ) => {
    return (
      <div className="form-control">
        <label className="label cursor-pointer gap-3">
          {label && <span className="label-text">{label}</span>}
          <input
            ref={ref}
            type="radio"
            className={cn("radio radio-primary", className)}
            {...props}
          />
        </label>
      </div>
    );
  }
);

export default Radio;
