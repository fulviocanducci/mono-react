import { Controller, useForm, type FieldError } from "react-hook-form";

import { InputMoney } from "@fulviocanducci/input-money";
import { InputDate } from "@fulviocanducci/input-date";
import { schema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

type FormData = z.infer<typeof schema>;

function setCssValidOrInvalid(data: FieldError | undefined, moreCssClass?: string | undefined) {
  const css = data ? "form-control form-control-sm is-invalid" : "form-control form-control-sm is-valid";
  return css + (moreCssClass != null && moreCssClass.trim().length > 0 ? " " + moreCssClass : "");
}

function App() {
  const {
    control,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
    values: { value: 0, date: "" },
    mode: "all",
  });

  const errorsSubmitButtonState: boolean = !isValid || isSubmitting;

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-1 m-1">
          <Controller
            name="value"
            control={control}
            render={({ field }) => (
              <InputMoney
                value={field.value}
                onChange={field.onChange}
                className={setCssValidOrInvalid(errors.value, "text-end")}
                autoFocus
              />
            )}
          />
          {errors.value && <div className="text-danger">{errors.value.message}</div>}
        </div>
        <div className="p-1 m-1">
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <InputDate
                value={field.value}
                onChange={field.onChange}
                mask="00/00/0000"
                className={setCssValidOrInvalid(errors.date)}
              />
            )}
          />

          {errors.date && <div className="text-danger">{errors.date.message}</div>}
        </div>
        <div className="p-1 m-1">
          <button type="submit" disabled={errorsSubmitButtonState} className="btn btn-primary btn-sm">
            Adicionar
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
