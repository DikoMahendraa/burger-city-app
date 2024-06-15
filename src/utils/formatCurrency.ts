/**
 * Format a number as Indonesian Rupiah currency.
 * @param amount - The amount of money to format.
 * @param locale - The locale for formatting. Default is 'id-ID'.
 * @param currency - The currency code. Default is 'IDR'.
 * @returns The formatted currency string.
 */
export const formatCurrency = (
  amount: number,
  locale: string = 'id-ID',
  currency: string = 'IDR',
): string => {
  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
  return formatted.replace(/^Rp/, 'Rp.');
};

// Example usage:
const formattedAmount = formatCurrency(1500000);
console.log(formattedAmount); // Output: "Rp1.500.000,00"
