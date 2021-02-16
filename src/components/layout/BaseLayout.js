import React from "react";
import Header from './Header'

const BaseLayout = (props) => {


  return <>
  <Header/>
  <br />
  {props.children}
  
  </>;
};

export default BaseLayout;
