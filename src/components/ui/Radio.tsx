import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";
import { VariantProps, cva } from "class-variance-authority";

type RadioTypes = {
  label?: string;
  fullWidth?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof radioVariants>;

const radioVariants = cva(["radio"], {
  variants: {
    variant: {
      primary: ["checked:radio-primary"],
      secondary: ["checked:radio-secondary"],
      accent: ["checked:radio-accent"],
      success: ["checked:radio-success"],
      warning: ["checked:radio-warning"],
      info: ["checked:radio-info"],
      error: ["checked:radio-error"],
    },
    size: {
      lg: ["radio-lg"],
      md: ["radio-md"],
      sm: ["radio-sm"],
      xs: ["radio-xs"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const Radio = forwardRef(
  (
    { label, className, fullWidth, size, variant, ...props }: RadioTypes,
    ref: React.ForwardedRef<any>
  ) => {
    return (
      <div className={cn("form-control", className)}>
        <label
          className={cn(
            "label cursor-pointer",
            fullWidth ? "justify-between" : "justify-start gap-3"
          )}
        >
          <input
            ref={ref}
            type="radio"
            className={radioVariants({ variant, size })}
            {...props}
          />
          {label && <span className="label-text">{label}</span>}
        </label>
      </div>
    );
  }
);
