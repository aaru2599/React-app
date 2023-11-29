import { useState } from "react";
import ChildB from "./2.ChildB";
import { TatSkyProvider } from "./Context/userContext";

const PDParentUC = () => {
  const [uName, setUname] = useState("");

  
  return (
  
      <TatSkyProvider value={{ uName: uName, uCity: "Pune" }}>
        <div>
          <p>PD Parent</p>
          <input
            placeholder="Enter Name"
            onChange={(e) => setUname(e.target.value)}
          />
          <ChildB />
        </div>
      </TatSkyProvider>

  );
};

export default PDParentUC;