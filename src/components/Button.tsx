import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils/cn";

type ButtonProps = { className?: string } & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(["btn"], {
  variants: {
    variant: {
      primary: ["btn-primary"],
      secondary: ["btn-secondary"],
      accent: ["btn-accent"],
      success: ["btn-success"],
      warning: ["btn-warning"],
      info: ["btn-info"],
      error: ["btn-error"],
    },
    size: {
      lg: ["btn-lg"],
      md: ["btn-md"],
      sm: ["btn-sm"],
      xs: ["btn-xs"],
    },
    style: {
      outline: ["btn-outline"],
    },
  },
});

const Button = ({
  className,
  variant,
  size,
  children,
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="submit"
      className={cn(buttonVariants({ variant, size, style }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
