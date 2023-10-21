import React from "react";
import { ThemeContext } from "./themeContex";

function Header() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div style={toggle ? { background: "black" } : {}}>
      <h1>Header Component</h1>
    </div>
  );
}

export default Header;