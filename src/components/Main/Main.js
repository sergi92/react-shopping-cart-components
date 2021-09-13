import React from "react";

function Main(children, ...props) {
  return <main>{children}, {...props}</main>;
}

export default Main;
