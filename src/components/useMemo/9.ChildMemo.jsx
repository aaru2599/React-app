import {memo} from 'react'

const ChildMemo1 = memo(
    function Child({name,email})  {
        console.log("child Memo called");
          return (
            <div>
                <div>{name}</div>
                <div>{email}</div>
            </div>
          )
        }
)
export default ChildMemo1
