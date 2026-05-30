import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

export type InputDateProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
  value?: string;
  onChange: (value: string) => void;
  mask?: string;
  placeholder?: string;
  showMask?: boolean;
};

export const InputDate = forwardRef<HTMLInputElement, InputDateProps>(
  ({ value, onChange, mask = "00/00/0000", placeholder = "dd/mm/yyyy", showMask = false, ...props }, ref) => {
    function onChangeHandle(value: string) {
      if (onChange) {
        onChange?.(value);
      }
    }
    return (
      <IMaskInput
        ref={ref}
        {...props}
        inputMode="numeric"
        mask={mask}
        placeholder={placeholder}
        onAccept={(value) => onChangeHandle(value)}
        value={value}
        lazy={!showMask}
      />
    );
  },
);

InputDate.displayName = "InputDate";
