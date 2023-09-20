import { useEffect, useState } from "react"

const APIUseEffect03 = () => {
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${search}`)
            .then(responce => responce.json())
            .then(data => setSearch(data))
            .catch(err => console.log("err", err))
    }, [search])
    return (
        <div>
            <dl>
                <dt><p className="form-input">UserInput:</p></dt>
                <dd> <input type="text" className="form-control col-4" value={search} onChange={(e)=>setSearch(e.target.value)} /></dd>
                <div>
                    {
                       products.map((product)=>
                       <div key={product.id}></div>
                       )
                    }
                </div>

            </dl>

        </div>
    )

}
export default APIUseEffect03