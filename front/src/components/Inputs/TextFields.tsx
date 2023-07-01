import React from 'react'
import {TextField  } from '@mui/material';
const TextFields:React.FC<any> = (props) => {
  return (
    <TextField InputProps={{style:{width:"354px", height:"54px"}}}  {...props} style={{height:"52px"}} variant="outlined" />
  )
}

export default TextFields