import { SipDetails } from "../pages/SipCalculator";

export function SipCalculatorDetails({ details }: { details: SipDetails }) {
  return (
    <>
      <div className="form-control">
        <div className="label">
          <span className="label-text">Total value of your investment:</span>
        </div>
        <progress
          className="progress progress-primary h-4 ml-1"
          value={
            details.investedAmount !== 0
              ? (details.estimatedReturns / details.totalReturns) * 100
              : 0
          }
          max="100"
        ></progress>
        <div className="label label-text-alt justify-start gap-3">
          <span className="rounded-lg  bg-primary w-3 h-3"></span>
          Est. Returns
          <span className="rounded-lg bg-neutral-content w-3 h-3"></span>
          Invested Amount
        </div>
      </div>
      <div className="flex flex-col p-1 mt-3">
        <div className="divider m-0"></div>
        <div className="flex justify-between py-1">
          <span className="text-sm font-bold">Invested Amount</span>
          <span className="text-sm">
            ₹ {details.investedAmount.toLocaleString()}
          </span>
        </div>
        <div className="divider m-0"></div>
        <div className="flex justify-between py-1">
          <span className="text-sm font-bold">Estimated Returns</span>
          <span className="text-sm">
            ₹ {details.estimatedReturns.toLocaleString()}
          </span>
        </div>
        <div className="divider m-0"></div>
        <div className="flex justify-between py-1">
          <span className="text-sm font-bold">Total Returns</span>
          <span className="text-sm">
            ₹ {details.totalReturns.toLocaleString()}
          </span>
        </div>
        <div className="divider m-0"></div>
      </div>
    </>
  );
}
