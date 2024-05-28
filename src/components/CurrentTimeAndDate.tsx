import { useState, useEffect } from "react";
import { cn } from "../utils/cn";

const useCurrentTimeAndDate = () => {
  const [currentTimeAndDate, setCurrentTimeAndDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTimeAndDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return currentTimeAndDate;
};

const formatDateTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
};

type CurrentTimeAndDateProps = {
  className?: string;
};

const CurrentTimeAndDate = ({ className }: CurrentTimeAndDateProps) => {
  const currentTimeAndDate = useCurrentTimeAndDate();

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-3 py-1 rounded-lg bg-base-300",
        className
      )}
    >
      <p className="text-sm logo">{formatDateTime(currentTimeAndDate)}</p>
    </div>
  );
};

export default CurrentTimeAndDate;
