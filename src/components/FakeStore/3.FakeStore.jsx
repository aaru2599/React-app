import { useEffect, useState } from "react";
import { PuffLoader, CircleLoader } from "react-spinners";

import "./FakeStore.css"
import { useMemo } from "react";
import ShimmerEffect from "./ShimmerEffect";

const ProductFakeStore = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [cartLoading, setCartLoading] = useState(false)
    const [products, setProducts] = useState([]);
    // const [category, setCategory] = useState()
    const [cartCount, setCartCount] = useState()
    const [filterProducts, setFilterProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [search, setSearch] = useState("")
    const [searchBar, setSearchBar] = useState(false)
    const [heartItem, setHeartItem] = useState([])
    const [heartCount, setHeartCount] = useState()
    const cartLoader = {
        // backgroundColor:"red",
        // color:"red",
        position: "absolute",
        // top:"500px",
        marginLeft: "500px",


    }


    function LoadProducts(url) {
        fetch(url)
            .then((responce) => responce.json())
            .then((data) => {
                //console.log(data);

                setIsLoading(false);
                setCartLoading(false)
                setProducts(data);
                setFilterProducts(data)
            })
            .catch((err) => {
                console.log(err);
                // Error
                setIsLoading(false);
            })
            .catch((err) => console.log("errro", err))
            ;
    }
    useEffect(() => {
        LoadProducts("https://fakestoreapi.com/products")
        setCartLoading(false)
        getCartCount()

    }, []);
    // useEffect(() => {
    //     const filterList = products.filter((item) => {
    //         return item.title.toLowerCase().search(search.toLowerCase()) !== -1
    //     })
    //     setFilterProducts(filterList)
    //     console.log(filterList);
    // }, [products, search])
    const filteredListProduct = useMemo(() => {
        const filterList = products.filter((item) => {
            return item.title.toLowerCase().search(search.toLowerCase()) !== -1
        })
        // setFilterProducts(filterList)
        // console.log(filterList);
        return filterList
    }, [products, search])


    function handleValueChange(e) {
        if (e.target.value === "All") {
            setCartLoading(true)
            LoadProducts("https://fakestoreapi.com/products")
        }
        else {
            setCartLoading(true)
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
            // setCartLoading(true)
        }

    }
    function getCartCount() {
        setCartCount(cartItem.length)
    }
    function handleCartCount(e) {
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then((responce) => responce.json())
            .then((data) => {
                cartItem.push(data)
                alert(`${data.title} \n\n Selected `)
                getCartCount(data)
            })
    }
    function handleSearchBar() {
        setSearchBar(!searchBar)
    }

   
    // console.log("cartLoading",cartLoading);
    console.log("cartLoading", cartLoading);
    function handleHeartCount(e) {
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(responce => responce.json())
            .then((data) => {
                heartItem.push(data)
                alert(`${data.title} added`)
                getHeartCount(data)
            })
    }
    function getHeartCount() {
        setHeartCount(heartItem.length)
    }


    return (
        <div className="container-fluid">


            <header className="d-flex justify-content-between bg-dark mt-2 p-2 text-light">
                <div className="fw-bold">
                    <h2>FakeStore</h2>
                </div>
                <div className="fs-5" >
                    <button className="me-4 btn text-bg-dark fw-bold fs-5" value="All" onClick={handleValueChange} >Home</button>
                    <button className="me-4 btn text-bg-dark fw-bold fs-5" value="electronics" onClick={handleValueChange}>Electronics</button>
                    <button className="me-4 btn text-bg-dark fw-bold fs-5" value="jewelery" onClick={handleValueChange}>Jewelery</button>
                    <button className="me-4 btn text-bg-dark fw-bold fs-5" value="men's clothing" onClick={handleValueChange}>Men's clothing</button>
                    <button className="me-4 btn text-bg-dark fw-bold fs-5" value="women's clothing" onClick={handleValueChange}>Women's clothing</button>
                </div>
                <div className="fs-5">
                    <button className="me-2 btn text-light" onClick={handleSearchBar}><span className=" bi bi-search"></span></button>
                    <button className="me-2 btn text-light"><span className=" bi bi-heart">{heartCount}</span></button>
                    <button className="me-2 btn text-light"><span className=" bi bi-person"></span></button>
                    <button className="me-2 btn text-light position-relative">
                        <span className=" bi bi-cart " ></span>
                        <span className="badge bg-danger rounded-1 position-absolute">{cartCount}</span></button>
                </div>
            </header>
            {isLoading ? (
                <ShimmerEffect className="LoaderStyle" color="white" />
            ) : (
                <div className="main-div">
                    {
                        <div className={`search-bar ${searchBar ? 'active fade-in' : 'exit'}`}>
                            <input type="search" className="form-control" onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
                        </div>
                    }
                    <hr />
                    <section className="d-flex mt-4 ">
                        <nav className="col-2 ">
                            <div className="sectionArea">
                                <div >
                                    <h2>Section Category</h2>
                                </div>
                                <select className="form-select" onChange={handleValueChange}>
                                    <option className="form-option">All</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="jewelery">Jewelery</option>
                                    <option value="men's clothing">Men's clothing</option>
                                    <option value="women's clothing">Women's clothing</option>
                                </select>
                            </div>
                        </nav>
                        <main>
                            {
                                cartLoading ? (<ShimmerEffect color="white" style={cartLoader} />) :
                                    (
                                        <div className="d-flex div-card flex-wrap w-5 ">
                                            {


                                                filteredListProduct.map((product) =>

                                                    <div key={product.id} className="card m-2 p-2 position-relative">
                                                        <img src={product.image} height={200} className="card-img-top" />
                                                        <button id={product.id} onClick={handleHeartCount} className="btn  position-absolute w-25">
                                                            <span className="bi bi-heart-fill heart-btn"> </span>

                                                        </button>
                                                        <div className="card-header ">
                                                            <p className="card-title " >{product.title}</p>
                                                        </div>

                                                        <div className="card-body">
                                                            <dl>
                                                                <dt>Product Price</dt>
                                                                <dd>{product.price}</dd>
                                                                <dt>Product Rating</dt>
                                                                <dd><span className="bi bi-star-fill"> </span>{product.rating.rate}[{product.rating.count}]</dd>
                                                            </dl>
                                                        </div>
                                                        <div className="card-footer">
                                                            <button id={product.id} onClick={handleCartCount} className="btn    d-flex mr-auto ml-auto cart-btn"><span className="bi bi-cart mr-2"></span> Add to cart</button>
                                                        </div>

                                                    </div>



                                                )
                                            }
                                        </div>)
                            }
                        </main>
                    </section>
                </div>
            )}
        </div>
    );
};

export default ProductFakeStore;



// https://fakestoreapi.com/products/categories/jewelery
// https://fakestoreapi.com/products/category/electronics