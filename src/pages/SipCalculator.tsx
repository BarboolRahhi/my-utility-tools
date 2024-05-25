import { SubmitHandler, useForm } from "react-hook-form";
import MainContainer from "../components/MainContainer";
import { useEffect, useState } from "react";
import { calculateMonthlySIPValue } from "../utils/calculateMonthlySIPValue";
import { calculateLumpsumValue } from "../utils/calculateLumpsumValue";
import Input from "../components/Input";
import TimePeriodSvg from "../components/svg-icon/TimePeriodSvg";
import PercentageSvg from "../components/svg-icon/PercentageSvg";
import RupeeSvg from "../components/svg-icon/RupeeSvg";
import Radio from "../components/Radio";
import ProgressChart from "../components/ProgressChart";
import { KeyValueList } from "../components/KeyValueList";
import Button from "../components/Button";
type Inputs = {
  sipType: string;
  amount: number;
  interestRate: number;
  years: number;
};

export type SipDetails = {
  investedAmount: number;
  estimatedReturns: number;
  totalReturns: number;
};

const SipCalculator = () => {
  const { register, handleSubmit, getValues, reset } = useForm<Inputs>({
    defaultValues: {
      sipType: "sip",
      amount: 5000,
      interestRate: 8,
      years: 5,
    },
  });

  const [sipResult, setSipResult] = useState<SipDetails>({
    investedAmount: 0,
    estimatedReturns: 0,
    totalReturns: 0,
  });

  const progressValue =
    sipResult.totalReturns !== 0
      ? (sipResult.estimatedReturns / sipResult.totalReturns) * 100
      : 0;

  const keyValueData = [
    {
      key: "Invested Amount",
      value: "₹" + sipResult.investedAmount.toLocaleString(),
    },
    {
      key: "Estimated Returns",
      value: "₹" + sipResult.estimatedReturns.toLocaleString(),
    },
    {
      key: "Total Returns",
      value: "₹" + sipResult.totalReturns.toLocaleString(),
    },
  ];

  useEffect(() => {
    onSubmit(getValues());
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { sipType, amount, interestRate, years } = data;

    const investedAmount = amount * years * 12;
    if (sipType === "sip") {
      const value = calculateMonthlySIPValue(amount, interestRate, years);
      setSipResult({
        investedAmount: investedAmount,
        estimatedReturns: value - investedAmount,
        totalReturns: value,
      });
    } else {
      const value = calculateLumpsumValue(amount, interestRate, years);
      setSipResult({
        investedAmount: amount,
        estimatedReturns: value - amount,
        totalReturns: value,
      });
    }
  };

  return (
    <MainContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-1 flex-col lg:flex-row"
      >
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex gap-2">
            <Radio
              label="Sip"
              {...register("sipType")}
              value="sip"
              defaultChecked
              variant="primary"
            />
            <Radio
              label="Lumpsum"
              {...register("sipType")}
              value="lumpsum"
              variant="primary"
            />
          </div>
          <Input
            {...register("amount")}
            label="Monthly Investment"
            type="number"
            placeholder="In Rupees"
            min={1}
            max={5000000}
            icon={<RupeeSvg />}
          />
          <Input
            {...register("interestRate")}
            label="Expected Return Rate (p.a)"
            type="number"
            placeholder="In percentage"
            min={1}
            max={30}
            step=".01"
            required
            icon={<PercentageSvg />}
          />
          <Input
            {...register("years")}
            label="Time Period (years)"
            placeholder="in years"
            type="number"
            min={1}
            max={30}
            required
            icon={<TimePeriodSvg />}
          />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex flex-col flex-1 gap-4">
          <ProgressChart
            label="Total value of your investment:"
            bottomLabel={{
              progressLabel: "Est. Returns",
              unProgresslabel: "Invested Amount",
            }}
            progressValue={progressValue}
          />
          <KeyValueList data={keyValueData} />
          <div className="flex gap-4 mt-3 lg:mt-auto">
            <Button type="submit" className="flex-1" variant="primary">
              Calculate
            </Button>
            <Button
              type="button"
              variant="primary"
              style="outline"
              className=" flex-1"
              onClick={() => {
                reset();
              }}
            >
              Clear
            </Button>
          </div>
        </div>
      </form>
    </MainContainer>
  );
};

export default SipCalculator;
