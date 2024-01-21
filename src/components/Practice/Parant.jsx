import { useState } from "react";
import ChildComp from "./Child";

const ParentV1 = () => {
  const [counter, setCounter] = useState(0);

  console.log("Parent Re-Render");
  return (
    <>
      <p onClick={() => setCounter((count) => count + 1)}>Counter: {counter}</p>
      <ChildComp
        data={{
          name: "Rahul",
          city: "Pune",
          details: {
            info: true,
            meta: {
              verse: true,
            },
          },
        }}
      />
    </>
  );
};

export default ParentV1;