import React, { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";
import { VariantProps, cva } from "class-variance-authority";

type TextAreaProps = {
  label?: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaVariants>;

const textareaVariants = cva(["textarea textarea-bordered"], {
  variants: {
    variant: {
      primary: ["textarea-primary"],
      secondary: ["textarea-secondary"],
      accent: ["textarea-accent"],
      success: ["textarea-success"],
      warning: ["textarea-warning"],
      info: ["textarea-info"],
      error: ["textarea-error"],
    },
    size: {
      lg: ["textarea-lg"],
      md: ["textarea-md"],
      sm: ["textarea-sm"],
      xs: ["textarea-xs"],
    },
  },
});

export const TextArea = forwardRef(
  (
    { label, className, size, error, variant, ...props }: TextAreaProps,
    ref: React.ForwardedRef<any>
  ) => {
    return (
      <label className={cn("form-control", className)}>
        {label && (
          <div className="label pt-0">
            <span className="label-text">{label}</span>
          </div>
        )}
        <textarea
          ref={ref}
          className={cn(
            textareaVariants({ variant, size }),
            error ? "textarea-error" : ""
          )}
          {...props}
        />
        {error && (
          <div className="label">
            <span className="label-text-alt text-error">{error}</span>
          </div>
        )}
      </label>
    );
  }
);
