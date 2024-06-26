import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";
import { VariantProps, cva } from "class-variance-authority";

type InputProps = {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof inputVariants>;

const inputVariants = cva(["input input-bordered flex items-center gap-2"], {
  variants: {
    variant: {
      primary: ["input-primary"],
      secondary: ["input-secondary"],
      accent: ["input-accent"],
      success: ["input-success"],
      warning: ["input-warning"],
      info: ["input-info"],
      error: ["input-error"],
    },
    size: {
      lg: ["input-lg"],
      md: ["input-md"],
      sm: ["input-sm"],
      xs: ["input-xs"],
    },
  },
});

export const Input = forwardRef(
  (
    { label, icon, className, variant, size, error, ...props }: InputProps,
    ref: React.ForwardedRef<any>
  ) => {
    return (
      <label className={cn("form-control", className)}>
        {label && (
          <div className="label pt-0">
            <span className="label-text">{label}</span>
          </div>
        )}
        <label
          className={cn(
            inputVariants({ variant, size }),
            error ? "input-error" : ""
          )}
        >
          {icon}
          <input {...props} className="grow" ref={ref} />
        </label>
        {error && (
          <div className="label">
            <span className="label-text-alt text-error">{error}</span>
          </div>
        )}
      </label>
    );
  }
);
