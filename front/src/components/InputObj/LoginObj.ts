import {
    emailErrorMessage,
    emailPattern,
    numericErrorMessage,
    numericPattern,
  } from "../RegexPatterns/email";
export const loginFields = [
 {
    type:"text",
    required: true,
    validationPatterns:[
        { pattern: emailPattern, errorMessage: emailErrorMessage },
        { pattern: numericPattern, errorMessage: numericErrorMessage },
      ],
    name:"login",
    placeHolder:"loginPlaceHolder"
    },
    {
        type:"text",
        required: false,
        validationPatterns:[
            { pattern: emailPattern, errorMessage: emailErrorMessage },
            { pattern: numericPattern, errorMessage: numericErrorMessage },
          ],
        name:"password",
        placeHolder:"passwordPlaceHolder"
        }
]