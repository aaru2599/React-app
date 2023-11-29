import { useContext } from "react";
import { NineXMChannel } from "./Context/userContext";
import { themeContext } from "./Context/themeContext";

const ChildB2 = () => {
  // Use setTopBox
  const setTopBox = useContext(NineXMChannel);
  const { theme } = useContext(themeContext);

  return (
    <div>
      <p>
        PD ChildB2 : {setTopBox.uName} {setTopBox.uCity} {theme}
      </p>
    </div>
  );
};

export default ChildB2;