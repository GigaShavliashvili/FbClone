import { MenuItem, Select } from '@mui/material'
import React from 'react'

const DefaultSelector:React.FC<any> = (props) => {
const [options, setOptions] = React.useState<{label:string, values:string}[]>([])
React.useEffect(() =>{
if(props.url){
    //reques for selector valuies
}else{
    setOptions(props.options)
}
},[])

  return (
    <Select
    {...props}
    style={{
        width: props.width ?? "354px"
    }}
    labelId="demo-select-small-label"
    id="demo-select-small"
    label="Age"
  /*   onChange={handleChange} */
  >
{options?.map((el:{label:string, values:string}) =>{
return <MenuItem key={el.values} value={el.values}>{el.label}</MenuItem>
})}
  </Select>
  )
}

export default DefaultSelector