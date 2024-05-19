export function calculateLumpsumValue(
  totalIvestment: number,
  annualInterestRate: number,
  years: number
) {
  const fv = totalIvestment * Math.pow(1 + annualInterestRate / 100, years);
  return Math.round(fv);
}
