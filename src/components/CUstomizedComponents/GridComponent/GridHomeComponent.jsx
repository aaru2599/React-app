import { GridComponent } from "./GridComponent";

export function GridHomeCompo(){
return(
    <div className="container-fluid">
        <h2>Employee Table</h2>
        <GridComponent fields={["First Name","Last Name" ,"Email","ContactNumber "]}/>
    </div>
)
}