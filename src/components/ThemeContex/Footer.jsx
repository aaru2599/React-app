import React from "react";
import { ThemeContext } from "./themeContex";

const Footer=()=> {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div style={toggle ? { background: "black" } : {}}>
      <h1>Footer Component</h1>
    </div>
  );
}

export default Footer;