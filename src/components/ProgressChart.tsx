import { cn } from "../utils/cn";

type ProgressChart = {
  progressValue: number;
  label?: string;
  bottomLabel?: { progressLabel: string; unProgresslabel: string };
  className?: string;
};

const ProgressChart = ({
  progressValue,
  label,
  bottomLabel,
  className,
}: ProgressChart) => {
  return (
    <div className={cn("form-control", className)}>
      {label && (
        <div className="label pt-0">
          <span className="label-text">{label}</span>
        </div>
      )}
      <progress
        className="progress progress-primary h-4 ml-1"
        value={progressValue}
        max="100"
      ></progress>
      {bottomLabel && (
        <div className="label label-text-alt justify-start gap-3">
          <span className="rounded-lg bg-primary w-3 h-3"></span>
          {bottomLabel.progressLabel}
          <span className="rounded-lg bg-neutral-content w-3 h-3"></span>
          {bottomLabel.unProgresslabel}
        </div>
      )}
    </div>
  );
};

export default ProgressChart;
