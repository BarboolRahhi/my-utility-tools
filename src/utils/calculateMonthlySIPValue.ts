export function calculateMonthlySIPValue(
  monthlyInvestment: number,
  annualInterestRate: number,
  years: number
) {
  const monthlyRate = annualInterestRate / 12 / 100;
  const months = years * 12;

  const fv =
    (monthlyInvestment *
      (Math.pow(1 + monthlyRate, months) - 1) *
      (1 + monthlyRate)) /
    monthlyRate;

  return Math.round(fv);
}
