import { createGlobalStyle } from "styled-components";
import FiraGOEot from "./fonts/firago-bold/FiraGO-Bold.eot";
import FiraGOWoff from "./fonts/firago-bold/FiraGO-Bold.woff";
import FiraGOWoff2 from "./fonts/firago-bold/FiraGO-Bold.woff2";

import FiraGOMediumEot from "./fonts/firago-medium/FiraGO-Medium.eot";
import FiraGOMediumwoff2 from "./fonts/firago-medium/FiraGO-Medium.woff";
import FiraGOMediumwoff from "./fonts/firago-medium/FiraGO-Medium.woff2";

import FiraGORegularEot from "./fonts/firago-regular/FiraGO-Regular.eot";
import FiraGORegularwoff from "./fonts/firago-regular/FiraGO-Regular.woff";
import FiraGORegularwoff2 from "./fonts/firago-regular/FiraGO-Regular.woff2";

import FiraGOLightEot from "./fonts/firago-light/FiraGO-Light.eot";
import FiraGOLightwoff from "./fonts/firago-light/FiraGO-Light.woff";
import FiraGOLightwoff2 from "./fonts/firago-light/FiraGO-Light.woff2";

 const GlobalAppStyles = createGlobalStyle`
  @font-face {
    font-family: 'FiraGO-Bold';
        src: url(${FiraGOEot}); /* IE9 Compat Modes */
        src: url(${FiraGOWoff2}) format('woff2'), /* Super Modern Browsers */
             url(${FiraGOWoff}) format('woff'); /* Pretty Modern Browsers */
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
  
  @font-face {
  font-family: "FiraGO-Medium";
  src: url(${FiraGOMediumEot});
  src: url("FiraGO-Book.eot?#iefix") format("embedded-opentype")
    url(${FiraGOMediumwoff2}) format("woff2"),
    url(${FiraGOMediumwoff}) format("woff"),
    url("FiraGO-Book.ttf") format("truetype"),
    url("FiraGO-Book.svg#FiraGO-Book") format("svg");
  font-weight: normal;
  font-style: normal;
}


@font-face {
  font-family: "FiraGO-Regular";
  src: url(${FiraGORegularEot});
  src: url("FiraGO-Regular.eot?#iefix") format("embedded-opentype"),
    url(${FiraGORegularwoff2}) format("woff2"),
    url(${FiraGORegularwoff}) format("woff"),
    url("FiraGO-Regular.ttf") format("truetype"),
    url("FiraGO-Regular.svg#FiraGO-Regular") format("svg");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "FiraGO-Light";
  src: url(${FiraGOLightEot});
  src: url("FiraGO-Light.eot?#iefix") format("embedded-opentype"),
    url(${FiraGOLightwoff2}) format("woff2"),
    url(${FiraGOLightwoff}) format("woff"),
    url("FiraGO-Light.ttf") format("truetype"),
    url("FiraGO-Light.svg#FiraGO-Light") format("svg");
  font-weight: 300;
  font-style: normal;
}

`

export default GlobalAppStyles;