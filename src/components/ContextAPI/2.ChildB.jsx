import { useContext,React } from "react";
import ChildB1 from "./3.ChildB1";
import { themeContext } from "./Context/themeContext";

const ChildB = () => {
  const { theme, onToggleTheme } = useContext(themeContext);
  return (
    <div>
      <p style={{ cursor: "pointer" }} onClick={onToggleTheme}>
        PD ChildB {theme}
      </p>
      <ChildB1 />
    </div>
  );
};

export default ChildB;