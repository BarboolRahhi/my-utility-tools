import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

type TextFieldProps = {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = forwardRef(
  (
    { label, icon, className, error, ...props }: TextFieldProps,
    ref: React.ForwardedRef<any>
  ) => {
    return (
      <label className="form-control">
        {label && (
          <div className="label pt-0">
            <span className="label-text">{label}</span>
          </div>
        )}
        <label
          className={cn(
            `input input-bordered flex items-center gap-2`,
            error ? "input-error" : "",
            className
          )}
        >
          {icon}
          <input {...props} className="grow" ref={ref} />
        </label>
        {error && (
          <div className="label">
            <span className="label-text">{error}</span>
          </div>
        )}
      </label>
    );
  }
);

export default TextField;
