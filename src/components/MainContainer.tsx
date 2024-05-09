import { PropsWithChildren } from "react";
import { cn } from "../utils/cn";

type CardProps = PropsWithChildren & { className?: string };

const MainContainer = ({ children, className }: CardProps) => {
  return (
    <div className={cn(`card bg-base-100 flex-col gap-4 p-6`, className)}>
      {children}
    </div>
  );
};

export default MainContainer;
