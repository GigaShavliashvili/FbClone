import React, { ReactElement, useState } from "react";
import MyTextInput from "../myInputs/MyTextInput";
import LanguageProvider from "../../Language/LanguageProvider";

const MyForm: React.FC<{
  loginFields: any[];
  interface: any;
  onFinish: (values: any) => void;
  children: ReactElement;
}> = ({ loginFields, onFinish, children }) => {
  const [value, setValue] = useState<any>({});
  const [validForm, setValidForm] = useState(true)
  const [checked, setChecked] = useState<boolean>(false)
  const ln = LanguageProvider();
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
   /*  if (onFinish && validForm && checked) { */
   setChecked(true)
   if(checked) {
       onFinish(value);
   }
/*     } */
  };
  return (
    <form
      onSubmit={submitHandler}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {loginFields.length > 0 &&
        loginFields.map((field) => (
          <MyTextInput
          checked={checked}
          setChecked={setChecked}
          setValidForm={setValidForm}
            key={field.name}
            setValue={setValue}
            value={value[field.name]}
            {...field}
            placeHolder={ln[field.placeHolder]}
          />
        ))}
      {children}
    </form>
  );
};

export default MyForm;
