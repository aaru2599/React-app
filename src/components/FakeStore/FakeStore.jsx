import { useEffect, useState } from "react"
import "./FakeStore.css"

const FakeStore = () => {
    const [products, setProduct] = useState([]);
    const [items, setItems] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [cartItem, setCartItem] = useState([])
    const [cartCount, setCartCount] = useState()

    function getCartCount() {
        setCartCount(cartItem.length);


    }
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
        getCartCount()

    }, [])

    function handleCategoryChange(e) {
        if (e.target.value == "All") {
            LoadItems("https://fakestoreapi.com/products");
        }
        else {
            LoadItems(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }

    }
    const handleKeyUp = (e) => {
        setSearchText(e.target.value)
    }
    function handleAddToCartClick(e) {
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(responce => responce.json())
            .then((data) => {
                cartItem.push(data)
                // console.log(cartItem);
                getCartCount(data)
                alert(`${data.title}\n Added to the cart`)
            })
    }
    return (

        <div className="container-fluid">
            <header className="bg-dark text-white mt-2 d-flex justify-content-between p-2">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>FakeStore</h2>
                </div>
                <div>
                    <span className="me-4">Home</span>
                    {products.map((product) =>
                        <button value={product} onClick={handleCategoryChange} className="me-4 btn text-light outline-none">{product.charAt(0).toUpperCase() + product.slice(1)}</button>
                    )}

                </div>
                <div>
                    <span className="me-3 bi bi-search"></span>
                    <span className="me-3 bi bi-heart"></span>
                    <span className="me-3 bi bi-person"></span>
                    <button data-bs-target="#cart" data-bs-toggle="modal " className="btn btn-light position-relative">
                        <span className="me-3 bg-none bi bi-cart"> </span>
                        <span className="badge rounded-bi-circle position-absolute bg-danger">{cartCount}</span>
                    </button>
                    <div className="modal fade" id="cart">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h2 className="text-primary">Your cart item</h2>
                                    <button data-bs-dismiss="modal" className="btn btn-close"></button>
                                </div>
                                <div><h2>cart content</h2></div>
                            </div>

                        </div>
                    </div>
                </div>

            </header>
            <div className="searchBar ">
                <input type="text" className="form-control" onKeyUp={handleKeyUp} placeholder="Search Products" />
            </div>
            <section className="mt-4 d-flex">

                <nav className="col-2">
                    <div className="sectionArea">
                        <div>
                            <h4 className="form-label">Section Category</h4>
                        </div>
                        <select className="form-select" onChange={handleCategoryChange}>
                            {
                                products.map((product) =>
                                    <option key={product} value={product}>{product.toUpperCase()}</option>
                                )
                            }

                        </select>
                    </div>
                </nav>
                <main className=" d-flex flex-wrap">
                    {
                        items.filter((item) =>
                            item.title.toLowerCase().includes(searchText.toLocaleLowerCase())
                        )
                            .map((item) =>
                                <div key={item.id} className="card m-2 p-2">
                                    {/* <img src={item.image} height={250} className="card-img-top" /> */}
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
                                        <button id={item.id} onClick={handleAddToCartClick} className="btn btn-danger w-100"><span className="bi bi-cart4"></span> Add To Card</button>

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