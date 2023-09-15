import { useState } from "react"
export const MissileLauncher = () => {
    const [button, setButton] = useState({
        openTunnel: false,
        enablePower: false,
        startCountDown: false,
        launchMissile: false,

    })
   
    const btnClick = (buttonName) => {
        setButton({
            ...button, [buttonName]: !button[buttonName]
        })
    }
    const mainStyle={
        display:"flex",
        justifyContent:"space-between"
    }
    const isTaskCompleted = button.openTunnel && button.enablePower && button.startCountDown && button.launchMissile
    return (
        <div style={mainStyle}>
            <div>OpenTunnel:
                <button onClick={() => { btnClick("openTunnel") }}>{button.openTunnel ? "Active" : "InActive"}</button>
            </div>
            <div>EnablePower:
            <button onClick={() => { btnClick("enablePower") }}>{button.enablePower ? "Active" : "InActive"}</button>
            
            </div>
            <div>StartCountDown:
            <button onClick={() => { btnClick("startCountDown") }}>{button.startCountDown ? "Active" : "InActive"}</button>
            
            </div>
            <div>LaunchMissile:
            <button onClick={() => { btnClick("launchMissile") }}>{button.launchMissile ? "Active" : "InActive"}</button>
            
           <div> {isTaskCompleted && <p>Missile Launched</p>}</div>
            </div>
        </div>
    )


}
export default MissileLauncher