export function calculateLoanEMI(
  principal: number,
  annualInterestRate: number,
  tenureYears: number
) {
  // Convert annual interest rate to monthly and make it a decimal
  let monthlyInterestRate = annualInterestRate / 12 / 100;

  // Convert tenure in years to months
  let tenureMonths = tenureYears * 12;

  let emi =
    (principal *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, tenureMonths)) /
    (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);

  return +emi.toFixed(3);
}
