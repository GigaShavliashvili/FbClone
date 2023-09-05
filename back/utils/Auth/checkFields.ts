import { RegisterBody } from "../../interface/user";

export const checkFields = (body: any) => {
  let undifinedValues: any = [];
  Object.values(body).forEach((value, key) => {
    
    if (!value) {
        console.log(Object.keys(body))
      undifinedValues.push(`${Object.keys(body)[key]} is undefined!`);
    }
  });
  console.log(undifinedValues);
  return undifinedValues;
};
