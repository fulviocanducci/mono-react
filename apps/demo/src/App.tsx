import { InputMoney } from "@fulviocanducci/input-money";
import { InputDate } from "@fulviocanducci/input-date";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [date, setDate] = useState("");
  const onChangeValue = (n: number) => {
    setValue(() => n);
  };
  const onChangeDate = (n: string) => {
    setDate(() => n);
  };
  return (
    <>
      <div className="p-3 m-3">
        <InputMoney value={value} onChange={onChangeValue} className="form-control form-control-sm text-end" />
        <label>{value}</label>
      </div>
      <div className="p-3 m-3">
        <InputDate
          value={date}
          placeholder="DD/MM/YYYY"
          onChange={onChangeDate}
          mask="00/00/0000"
          className="form-control form-control-sm"
        />
        <label>{date}</label>
      </div>
    </>
  );
}

export default App;
