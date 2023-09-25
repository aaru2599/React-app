import { useState } from "react"

const ClipBoard01 = () => {
    const [msg, setMsg] = useState("")
    function handleCut() {
        setMsg("Messege Cut")
    }
    function handleCopy() {
        setMsg("Messege Copy")
    }
    function handlePaste() {
        setMsg("Messege Paste")
    }
    return (
        <div className="d-flex justify-content-center align-item-center " >
            <div>
                <textarea rows="4" cols="40" onCut={handleCut} onCopy={handleCopy} onPaste={handlePaste}>

                </textarea >
                <div>
                    <p>{msg}</p>
                </div>
            </div>
        </div>
    )
}
export default ClipBoard01