import { useState } from "react";

const FuncComp = () => {
    const [userName, setUserName] = useState("");
  console.log("Hello Without");
    // Re-Calculated everytime on re-render
    let counter = 0;
    for (let item = 0; item < 100; item++) {
      counter = counter + item;
    }
    console.log("counter",counter);
    return (
      <div>
        <p>Counter: {counter}</p>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
    );
  };
  
  export default FuncComp;