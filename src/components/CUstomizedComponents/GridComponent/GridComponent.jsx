export function GridComponent(props){
return(
    <div className="container-fluid">
        <table className="table table-hover">
            <thead>
                <tr>
                    {
                        props.fields.map((field)=>
                        <th key={field}>{field}</th>
                        )
                    }
                </tr>
            </thead>
        </table>
    </div>
)
}