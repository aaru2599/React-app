import { useState } from "react"

const FormState=()=>{
const [product,setProduct]=useState({
    Name:"",
    Price:0,
    City:"",
    Stock:false,
})
function havndleNameChange(e){
setProduct({
    Name:e.target.value,
    Price:product.Price,
    City:product.City,
    Stock:product.Stock,
})
}
function havndleCityChange(e){
    setProduct({
        Name:product.Name,
        Price:product.Price,
        City:e.target.value,
        Stock:product.Stock,
    })  
}
function havndlePriceChange(e){
    setProduct({
        Name:product.Name,
        Price:e.target.value,
        City:product.City,
        Stock:product.Stock,
    })
}
function havndleStockChange(e){
    setProduct({
        Name:product.Name,
        Price:product.Price,
        City:product.City,
        Stock:e.target.checked,
    })
}
return(
    <div className="container-fluid">
        <div className="row">
            <nav className="col-3">
                <h2>Register </h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={havndleNameChange} className="form-control" /></dd>
                    <dt>Price</dt>
                    <dd><input type="number" onChange={havndlePriceChange} className="form-control"/></dd>
                    <dt>City</dt>
                    <dd>
                        <select  onChange={havndleCityChange} className="form-select">
                            <option >Delhi</option>
                            <option >Bhopal</option>
                            <option >Indore</option>
                        </select>
                    </dd>
                    <dt>Stocks</dt>
                    <dd className="form-switch">
                        <input type="checkbox"  onChange={havndleStockChange} className="form-check-input"/>
                        Available
                    </dd>
                </dl>

            </nav>
            <main className="col-9">
                <h3>Product Details</h3>
                <dl>
                    <dt>Name</dt>
                    <dd>{product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{product.Price}</dd>
                    <dt>City</dt>
                    <dd>{product.City}</dd>
                    <dt>Stock</dt>
                    <dd>{(product.Stock==true)?"Available":"NotAvailable"}</dd>
                </dl>
            </main>


        </div>
    </div>
)
}
export default FormState