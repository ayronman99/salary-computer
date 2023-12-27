export const capitalizedMethod = (method: string): string => {
  const firstLetter = method.slice(0, 1).toUpperCase();
  const returnMethod =
    method === 'semimonthly'
      ? `${firstLetter}${method.slice(1, 4)}-${method.slice(4)}`
      : `${firstLetter}${method.slice(1)}`;

  return returnMethod;
};

export const methodFilter = (method: string): string => {
  return method === 'semimonthly'
    ? `${method.slice(0, 4)}-${method.slice(4)}`
    : `${method.slice(0)}`;
};

export const periodCompute = (rate: number, hours: number) => {
  // {hours} is the hours for each working period
  return rate * hours;
};
