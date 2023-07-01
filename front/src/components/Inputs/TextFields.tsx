import React from 'react'
import {TextField  } from '@mui/material';


const TextFields:React.FC<any> = (props) => {
  return (
    <TextField InputProps={{style:{width:props.width ?? "354px", height: !props.size && "54px"}}}  {...props}   variant="outlined" />
  )
}

export default TextFields