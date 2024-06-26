import { VariantProps, cva } from "class-variance-authority";
import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";

type CheckboxProps = {
  label?: string;
  labelPosition?: "left" | "right";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof inputVariants>;

const inputVariants = cva(["checkbox"], {
  variants: {
    variant: {
      primary: ["checked:checkbox-primary"],
      secondary: ["checked:checkbox-secondary"],
      accent: ["checked:checkbox-accent"],
      success: ["checked:checkbox-success"],
      warning: ["checked:checkbox-warning"],
      info: ["checked:checkbox-info"],
      error: ["checked:checkbox-error"],
    },
    size: {
      lg: ["checkbox-lg"],
      md: ["checkbox-md"],
      sm: ["checkbox-sm"],
      xs: ["checkbox-xs"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const Checkbox = forwardRef(
  (
    {
      variant,
      size,
      label,
      className,
      labelPosition = "left",
      ...props
    }: CheckboxProps,
    ref: React.ForwardedRef<any>
  ) => {
    return (
      <div className={cn("form-control", className)}>
        <label className="cursor-pointer label justify-start gap-4">
          {label && labelPosition === "left" && (
            <span className="label-text">{label}</span>
          )}
          <input
            ref={ref}
            type="checkbox"
            defaultChecked
            className={cn(inputVariants({ variant, size }))}
            {...props}
          />
          {label && labelPosition === "right" && (
            <span className="label-text">{label}</span>
          )}
        </label>
      </div>
    );
  }
);
