import { useEffect, useState } from "react"
import "./FakeStore.css"

const FakeStore = () => {
    const [products, setProduct] = useState([]);
    const [items, setItems] = useState([]);

    const LoadProducts = () => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(responce => responce.json())
            .then(data => {
                data.unshift("All")    
                setProduct(data)
            })

    }
    const LoadItems = (url) => {
        fetch(url)
            .then((responce) => responce.json())
            .then((data) => {
                setItems(data);
            });
    }
    useEffect(() => {
        LoadProducts();
        LoadItems("https://fakestoreapi.com/products");
    }, [])

    function handleCategoryChange(e){
        if(e.target.value=="All"){
            LoadItems("https://fakestoreapi.com/products");
        }
        else{
            LoadItems(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }

    }
    return (

        <div className="container-fluid">
            <header className="bg-dark text-white mt-2 d-flex justify-content-between p-2">
                <div>
                    <h2>FakeStore</h2>
                </div>
                <div>
                    <span className="me-4">Home</span>
                    {products.map((product) =>
                        <span className="me-4">{product.charAt(0).toUpperCase() + product.slice(1)}</span>
                    )}

                </div>
                <div>
                    <span className="me-3 bi bi-search"></span>
                    <span className="me-3 bi bi-heart"></span>
                    <span className="me-3 bi bi-person"></span>
                    <span className="me-3 bi bi-cart"></span>
                </div>
            </header>
            <section className="mt-4 d-flex">
                <nav className="col-2">
                    <div>
                        <label className="form-label">Section Category</label>
                    </div>
                    <select className="form-select" onChange={handleCategoryChange}>
                        {
                            products.map((product) =>
                                <option key={product} value={product}>{product.toUpperCase()}</option>
                            )
                        }

                    </select>
                </nav>
                <main className=" d-flex flex-wrap">
                    {
                        items.map((item) =>
                            <div key={item.id} className="card m-2 p-2">
                                <img src={item.image} height={250} className="card-img-top" />
                                <div className="card-header">
                                    <p className="card-title">{item.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Product Price</dt>
                                        <dd>{item.price}</dd>
                                        <dt>Product Rating</dt>
                                        <dd><span className="bi bi-star-fill"> </span>{item.rating.rate}[{item.rating.count}]</dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger w-100"><span className="bi bi-cart4"></span> Add To Card</button>

                                </div>

                            </div>
                        )
                    }
                </main>

            </section>
        </div>
    )
}
export default FakeStore