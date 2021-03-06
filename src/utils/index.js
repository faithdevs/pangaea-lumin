export const currencyFormatter = (amount, currency) => {
  return amount?.toLocaleString(`en-${currency?.slice?.(0, 2)}`, {
    style: "currency",
    currency,
  });
};
