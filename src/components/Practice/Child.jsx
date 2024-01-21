import { memo } from "react";

const Child = (props) => {
  console.log("Re-Render Child", props);

  return (
    <div>
      <p>Child Comp</p>
    </div>
  );
};

const ChildComp = memo(Child);
export default ChildComp;