import React from 'react'
import en from "./en.json"
import geo from "./geo.json"
import { LangugaStorage } from '../StateMenegment/global.store'
const LanguageProvider = () => {
  const {ln} = LangugaStorage()
  
  const Localln:any = {
    en,
    geo
  }
  return Localln[ln]
}

export default LanguageProvider