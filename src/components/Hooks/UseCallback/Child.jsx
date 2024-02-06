import {memo} from "react"
const Child = ({newFunc}) => {
    console.log("child");
  return (
    <div></div>
  )
}

export default memo(Child);