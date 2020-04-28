import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Flex from "typescript-styled-flex";
import HeaderComp from "./components/HeaderComp";
import NotificationContainer from "./components/Notification";
//createGlobalStyle = define the whole page's CSS
//reset = to reduce default line heights, margins, font sizes.... I mean, It gives me a clear blueprint
const GlobalStyle = createGlobalStyle`
  ${reset};
  body{
    height: 100%;
    background-color: #ecf0f1;
  } 
`;

//alignCenter = if there are numerous items which have different height, align them right in the center of flex axis
//full = give width 100% height 100%
function AppPresenter() {
  return (
    <Fragment>
      <GlobalStyle />
      <HeaderComp />
      <Flex alignCenter full column>
        <NotificationContainer text="Hello" seen={false} />
      </Flex>
    </Fragment>
  );
}

export default AppPresenter;
