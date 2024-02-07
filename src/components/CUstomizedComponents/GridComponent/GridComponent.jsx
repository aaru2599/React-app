import React from "react"
export function GridComponent(fields) {
    console.log(fields);
    return (
        <div className="container-fluid">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {
                            fields.fields.map((field) =>
                                <th key={field}>{field}</th>
                            )
                        }
                    </tr>
                </thead>
            </table>
        </div>
    )
}