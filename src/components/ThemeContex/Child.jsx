import React from "react";
import { ThemeContext } from "./themeContex";


 function Child() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  return (
    <div>
     
      <button onClick={toggleFunction}>Theme</button>
      {toggle ? "Dark" : "Light"}
    </div>
  );
}
export default Child