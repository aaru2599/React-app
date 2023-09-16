import { useState } from "react"

const State01=()=>{
    const [userName]=useState("Arvind")
    const [products]=useState(["mobile","tv","fridge"])
    const [categories]=useState([{name:"Bike",price:20000},{name:"car",price:30000}])
    const [name]=useState({
        firstName:"Avind",secondName:"Mandre"
    })
    
    return(
        <div>
            <div>Hello {userName}</div>
            <div>
               <h2>Products</h2>
               <ol>
                {
                    products.map((product)=>
                        <li key={product}>{product}</li>
                    )
                }
               </ol>

            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>

                    </thead>

                    <tbody>
                        {
                            categories.map((category)=>
                            <tr key={category.name}>
                                <td>{category.name}</td>
                                <td>{category.price}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <p>Hello {name.firstName} wellCome {name.secondName}</p>
            </div>
        </div>
    )
}

export default State01