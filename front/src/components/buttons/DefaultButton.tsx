import React from 'react'
import Button from '@mui/material/Button';
import styled from "styled-components";


export const DefaultButton:any = styled(Button)`
   height:${(props:any) => props.height ?? ""};
  width: ${(props:any) => props.width ?? ""};
`
