import React from 'react'
import FbText from '../FbText/FbText'
import { Divider } from '@mui/material'
import { LangugaStorage } from '../../StateMenegment/global.store'


const AuthFooter:React.FC = () => {
  const {changeLn} = LangugaStorage()
  return (
    <div style={{width:"60%", display:"flex", flexDirection:"column",gap:"1rem", padding:"20px"}}>
            <FbText 
     color="#8a8d91"
     lineQuantity="2"
     style={{ width: undefined, lineHeight: "24px"}}
     fontSize={"13px"}
     font="FiraGo-Regular"
    >
<span style={{cursor:"pointer"}} onClick={() =>changeLn("en")}>
English (US)
</span>
<span style={{cursor:"pointer"}} onClick={() => changeLn("geo")}>
ქართული
</span>
Русский
Türkçe
Deutsch
Azərbaycan dili
العربية
Français (France)
Ελληνικά
Español
Português (Brasil)

    </FbText>
    <Divider/>
    <FbText 
     color="#8a8d91"
     lineQuantity="2"
     style={{ width: undefined, lineHeight: "24px"}}
     fontSize={"13px"}
     font="FiraGo-Regular"
    >
         Sign UpLog InMessenger Facebook Lite  Watch  Places  GamesMarketplace  Meta PayMeta StoreMeta Quest 
          Instagram  Fundraisers  Services  Voting  Information  CenterPrivacy  PolicyPrivacy  Center 
           Groups  About  Create adCreate PageDevelopers  Careers  CookiesAd choices  TermsHelpContact Uploading & Non-UsersSettings  Activity log 
    </FbText>
    </div>
  )
}

export default AuthFooter