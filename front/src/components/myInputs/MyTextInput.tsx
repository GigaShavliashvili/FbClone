import React, { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import { MainColor } from "../../color";
import LanguageProvider from "../../Language/LanguageProvider";

const MyTextInput: React.FC<{
  name: string;
  placeHolder: string;
  validationPatterns: { pattern: RegExp; errorMessage: string }[];
  required: boolean;
  setValue: (value: any) => void;
  setValidForm:(valie:boolean) => void
  value:string
   checked:boolean
          setChecked:(value:boolean) => void
}> = ({ name, placeHolder, validationPatterns, required, value, setValue , setValidForm, setChecked, checked}) => {
  const [borderColor, setBorderColor] = useState<string>(MainColor.secondary);

  const [valid, setValid] = useState<boolean>(true);
  const [errMsg, setErrMsg] = useState<string>("");
  const ln = LanguageProvider();
  const onFocus = () => {
    console.log("onFocus")
    setBorderColor(MainColor.primary);
  };
  const onBlur = () => {
    if (required && !value) {
  /*     setValidForm(false) */
      setErrMsg(ln.requiredFields);
    } else {
       /*  setValidForm(true) */
      setBorderColor(MainColor.secondary);
    }
  };

  React.useEffect(() =>{
    if (required && !value && checked) {
        setErrMsg(ln.requiredFields)
        setValid(false);
        setChecked(true)
    }
  },[checked])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue((prev: any) => ({...prev,[name]:e.target.value}));
    
    const messages = validationPatterns
      .filter((validation) => !validation.pattern.test(e.target.value))
      .map((validation) => validation.errorMessage);

    if (messages.length) {
      /*   setValidForm(false) */
      setErrMsg(messages[0]);
      setValid(false);
    } else {
  /*   setValidForm(true) */
      setErrMsg("");
      setValid(true);
    }
  };

  return (
    <div>
      <MyInput
        
        name={name}
        value={value}
        placeholder={placeHolder}
        onFocus={onFocus}
        onBlur={onBlur}
        borderColor={valid ? borderColor : "red"}
        onChange={onChange}
      />
      <span style={{ fontSize: "12px", color: "red" }}>{!valid && errMsg}</span>
    </div>
  );
};

const MyInput = styled.input<{ borderColor?: string }>`
  width: 340px;
  border: 1px solid ${(props) => props.borderColor};
  outline: none;
  height: 44px;
  padding: 2px 8px;
  font-size: 14px;
  border-radius: 8px;
`;

export default MyTextInput;
