import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import MainContainer from "../components/MainContainer";
import { RadioGroup, Radio, Input, KeyValueList, Button } from "@component/ui";

type FormInputs = {
  actualHRAReceived: number;
  basicSalary: number;
  dearnessAllowance: number;
  actualRentPaid: number;
  cityType: string;
};

const initialFormState = {
  actualHRAReceived: 2200,
  basicSalary: 4500,
  dearnessAllowance: 0,
  actualRentPaid: 1500,
  cityType: "metro",
};

const HRAExemptionCalculator = () => {
  const { register, handleSubmit, getValues, reset } = useForm<FormInputs>({
    defaultValues: initialFormState,
  });
  const [hra, setHra] = useState<{
    actualHRAReceived: number;
    excessRentPaid: number;
    hraMetroAndNonMetro: number;
    hraExemption: number;
  } | null>(null);

  const calculateHRAExemption = (data: FormInputs) => {
    const {
      actualHRAReceived,
      basicSalary,
      dearnessAllowance,
      actualRentPaid,
      cityType,
    } = data;

    const salary = basicSalary + dearnessAllowance;
    const hraMetro = 0.5 * salary;
    const hraNonMetro = 0.4 * salary;
    const hraLimit = cityType === "metro" ? hraMetro : hraNonMetro;
    const excessRentPaid = actualRentPaid - 0.1 * salary;

    const hraExemption = Math.min(actualHRAReceived, hraLimit, excessRentPaid);
    setHra({
      hraExemption: Math.max(hraExemption, 0),
      actualHRAReceived: actualHRAReceived,
      hraMetroAndNonMetro: hraLimit,
      excessRentPaid: excessRentPaid,
    });
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    calculateHRAExemption(data);
  };

  const resetForm = () => {
    reset();
    setHra(null);
  };

  useEffect(() => {
    calculateHRAExemption(getValues());
  }, []);

  return (
    <MainContainer className="gap-10">
      <form
        className="flex flex-1 flex-col lg:flex-row"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4 flex-1">
          <RadioGroup label="City Type">
            <Radio {...register("cityType")} label="Metro" value="metro" />
            <Radio
              {...register("cityType")}
              label="Non-Metro"
              value="non-metro"
              defaultChecked
            />
          </RadioGroup>
          <Input
            {...register("actualHRAReceived", {
              valueAsNumber: true,
            })}
            label="Actual HRA Received"
            type="number"
            placeholder="Enter actual HRA received"
            min={1000}
          />

          <Input
            {...register("basicSalary", {
              valueAsNumber: true,
            })}
            label="Basic Salary"
            type="number"
            placeholder="Enter basic salary"
            required
            min={1000}
          />

          <Input
            {...register("dearnessAllowance", {
              valueAsNumber: true,
            })}
            label="Dearness Allowance"
            type="number"
            placeholder="Enter dearness allowance"
            required
            min={0}
          />

          <Input
            {...register("actualRentPaid", {
              valueAsNumber: true,
            })}
            label="Actual Rent Paid"
            type="number"
            placeholder="Enter actual rent paid"
            required
            min={1000}
          />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex flex-col flex-1 gap-6">
          <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-md">
            <p>
              <strong>HRA Exemption:</strong> ₹
              {hra?.hraExemption.toLocaleString()}
            </p>
          </div>
          {hra !== null && (
            <KeyValueList
              data={[
                {
                  key: `${
                    getValues().cityType === "metro" ? "50%" : "40%"
                  } of Basic Salary`,
                  value:
                    "₹" + Number(hra?.hraMetroAndNonMetro).toLocaleString(),
                },
                {
                  key: "Actual HRA Recived",
                  value: "₹" + Number(hra?.actualHRAReceived).toLocaleString(),
                },
                {
                  key: "Excess of Rent paid over 10% of salary",
                  value: "₹" + Number(hra?.excessRentPaid).toLocaleString(),
                },

                {
                  key: "Taxable HRA",
                  value: `₹${Number(
                    hra.actualHRAReceived - hra.hraExemption
                  ).toLocaleString()}`,
                },
              ]}
            />
          )}
          <div className="flex gap-4 mt-4 lg:mt-auto">
            <Button type="submit" variant="primary" className="flex-1">
              Calculate
            </Button>
            <Button
              type="button"
              variant="primary"
              style="outline"
              className="flex-1"
              onClick={resetForm}
            >
              Clear
            </Button>
          </div>
        </div>
      </form>
      <div className="p-6 border rounded-xl">
        <h2 className="text-xl font-bold mb-2">How HRA is Calculated?</h2>
        <p className="mb-2">
          The HRA exemption is the minimum of the following three amounts:
        </p>
        <ul className="list-decimal list-inside mb-4">
          <li>Actual HRA received</li>
          <li className="mt-2">
            50% of salary (basic salary + dearness allowance) for those living
            in metro cities (Delhi, Mumbai, Kolkata, Chennai) or 40% of salary
            for non-metro cities
          </li>
          <li className="mt-2">Actual rent paid minus 10% of salary</li>
        </ul>
        <p className="mb-2">
          This calculator helps you determine the exempted amount from your
          taxable income based on the inputs provided.
        </p>
      </div>
    </MainContainer>
  );
};

export default HRAExemptionCalculator;
