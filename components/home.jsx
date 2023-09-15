import { FooterCompo } from "./footer"
import { HeaderCompo } from "./header"

export const HomeCompo=()=>{
    return (
        <div>
            <HeaderCompo/>
            <p>This is Home</p>
            <FooterCompo/>
        </div>
    )
}