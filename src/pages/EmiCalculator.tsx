import {
  useEffect,
  useState,
} from 'react';

import {
  SubmitHandler,
  useForm,
} from 'react-hook-form';

import {
  PercentageSvg,
  RupeeSvg,
  TimePeriodSvg,
} from '@component/svg-icon';
import {
  Button,
  Input,
  KeyValueList,
  ProgressChart,
} from '@component/ui';

import MainContainer from '../components/MainContainer';
import { calculateLoanEMI } from '../utils/calculateLoanEmi';

type Inputs = {
  amount: number;
  interestRate: number;
  years: number;
};

export type EmiDetails = {
  monthlyEmi: number;
  principalAmount: number;
  totalInterest: number;
  totalAmount: number;
};

const EmiCalculator = () => {
  const { register, handleSubmit, getValues, reset } = useForm<Inputs>({
    defaultValues: {
      amount: 100000,
      interestRate: 9,
      years: 5,
    },
  });

  const [emiResult, setEmiResult] = useState<EmiDetails>({
    monthlyEmi: 0,
    principalAmount: 0,
    totalInterest: 0,
    totalAmount: 0,
  });

  const progressValue =
    emiResult.principalAmount !== 0
      ? (emiResult.totalInterest / emiResult.principalAmount) * 100
      : 0;

  const keyValueData = [
    {
      key: "Monthly EMI",
      value: "₹" + emiResult.monthlyEmi.toLocaleString(),
    },
    {
      key: "Principal Amount",
      value: "₹" + emiResult.principalAmount.toLocaleString(),
    },
    {
      key: "Total Interest",
      value: "₹" + emiResult.totalInterest.toLocaleString(),
    },
    {
      key: "Total Amount",
      value: "₹" + emiResult.totalAmount.toLocaleString(),
    },
  ];

  useEffect(() => {
    onSubmit(getValues());
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { amount, interestRate, years } = data;
    const emi = calculateLoanEMI(amount, interestRate, years);
    const totalAmount = emi * years * 12;
    setEmiResult({
      monthlyEmi: Math.round(emi),
      principalAmount: amount,
      totalInterest: Math.round(totalAmount - amount),
      totalAmount: Math.round(totalAmount),
    });
  };

  return (
    <MainContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-1 flex-col lg:flex-row"
      >
        <div className="flex flex-col gap-4 flex-1">
          <Input
            {...register("amount")}
            label="Loan amount"
            type="number"
            placeholder="In Rupees"
            min={1}
            max={20000000}
            required
            icon={<RupeeSvg />}
          />
          <Input
            {...register("interestRate")}
            label="Rate of interest (p.a)"
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
            label="Loan tenure (years)"
            placeholder="in years"
            type="number"
            min={1}
            max={40}
            required
            icon={<TimePeriodSvg />}
          />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex flex-col flex-1 gap-4">
          <ProgressChart
            label="Total value of your investment:"
            bottomLabel={{
              progressLabel: "Interest Amount",
              unProgresslabel: "Principal Amount",
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

export default EmiCalculator;
