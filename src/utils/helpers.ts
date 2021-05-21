export const deepCopy = <T extends unknown>(obj: T): T =>
  JSON.parse(JSON.stringify(obj));

export const randomId = () => {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
};

export const removeZeroValues = (obj: {
  [key: string]: number;
}): { [key: string]: number } =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== 0));

export const getDateFromISO = (dateStr: string) => {
  const date = new Date(dateStr);
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return dateTimeFormat.format(date);
};

export const getMoneyString = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
};
