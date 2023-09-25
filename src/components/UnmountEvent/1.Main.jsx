import { useState } from "react"
import ChildV1 from "./1.Childv1";
import ChildV2 from "./2.ChildV2";

const Main=()=>{
    const [toggle,setToggle]=useState(false);
    return(
        <div>
            <button onClick={()=>{setToggle((prevState)=>!prevState)}}>Toggle Component</button>
            {toggle?<ChildV1/>:<ChildV2/>}
        </div>

    )
}
export default Main


// import { useState } from "react";
// import ChildV1 from "./2.ChildV1";
// import ChildV2 from "./3.ChildV2";

// const ParentDay15 = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setToggle((prevState) => !prevState)}>
//         Toggle Component
//       </button>

//       {toggle ? <ChildV1 /> : <ChildV2 />}
//     </div>
//   );
// };

// export default ParentDay15;







// import { useEffect, useState } from "react";

// const ChildV1 = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     console.log("Child V1 Mounting");

//     const handleMouseMove = (event) => {
//       console.log({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       console.log("ChildV1 unmounting");
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     console.log("Counter: ", counter);

//     return () => {
//       console.log("Counter Cleanup");
//     };
//   }, [counter]);

//   return (
//     <p
//       style={{ backgroundColor: "blue", color: "white" }}
//       onClick={() => setCounter((prevCounter) => prevCounter + 1)}
//     >
//       I am Child V1 Component {counter}
//     </p>
//   );
// };

// export default ChildV1;




// import { useEffect } from "react";

// const ChildV2 = () => {
//   useEffect(() => {
//     console.log("Child V2 Mounting");

//     return () => {
//       console.log("ChildV2 unmounting");
//     };
//   }, []);

//   return (
//     <p style={{ backgroundColor: "red", color: "white" }}>
//       I am Child V2 Component
//     </p>
//   );
// };

// export default ChildV2;
