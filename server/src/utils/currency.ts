const staticRates: Record<string, number> = { USD: 1, EUR: 0.92, INR: 83, GBP: 0.78 };
export function toCurrency(amountUSD: number, currency: string) {
  const rate = staticRates[currency] || 1;
  return Math.round(amountUSD * rate * 100) / 100;
}
export function format(amount: number, currency: string) {
  return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(amount);
}
