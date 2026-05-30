import React, { forwardRef } from "react";

const currencyFormatter = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export type InputMoneyProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
  value: number;
  onChange: (value: number) => void;
};

export const InputMoney = forwardRef<HTMLInputElement, InputMoneyProps>(({ value, onChange, ...props }, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    onChange(Number(onlyNumbers) / 100);
  };
  return (
    <input {...props} ref={ref} type="text" inputMode="numeric" value={currencyFormatter.format(value)} onChange={handleChange} />
  );
});
InputMoney.displayName = "InputMoney";
