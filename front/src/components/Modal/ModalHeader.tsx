import React from 'react'
import FbText from '../FbText/FbText'
import { Divider, Stack } from '@mui/material'

const ModalHeader:React.FC<{title:string, minTitle?:string}> = ({title, minTitle}) => {
  return (
    <Stack direction="column">
          <FbText font='FiraGo-Bold'  color="black" fontSize={"30px"}>{title}</FbText>
          <FbText font='FiraGo-Regular'  color="gray" fontSize={"15px"}>{minTitle}</FbText>
          <Divider style={{margin:"10px 0px"}}/>
    </Stack>

  )
}

export default ModalHeader