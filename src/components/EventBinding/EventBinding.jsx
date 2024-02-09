import React from "react"
const EventBinding = () => {
    function btnClick(e) {
        document.write(`
        Button Id:${e.target.id}<br>
        Button Name:${e.target.name}<br>
        Button ClassName:${e.target.className}<br>
        Button value:${e.target.value}
        
        `)
    }
    return (
        <div>
            <button id="btn" className="btn btn-primary" name="btnName" value="btnValue" onClick={btnClick}>Submit</button>
        </div>
    )
}
export default EventBinding