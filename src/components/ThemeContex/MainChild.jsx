import React from "react";




import { ThemeContext } from "./themeContex";
import Header from "./Header";
import Child from "./Child";
import Footer from "./Footer";

export default function MainChild() {
    const { toggle } = React.useContext(ThemeContext);
    return (
        <div className={toggle ? "dark" : "light"}>
            <Child />
            <Header />

            
         <Footer/>
        </div>
    );
}