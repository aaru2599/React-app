import axios from "axios"
import { useEffect, useState } from "react"

const Electronics = ({items}) => {
    const [elecProduct, setElecProduct] = useState([])
    useEffect(() => {
        const fetchElectronics = async () => {
            try {
                const { data } = await axios.get(
                    "https://fakestoreapi.com/products/category/electronics"
                );
                console.log("Electronics", data);
                setElecProduct(data);
            } catch (error) {
                console.error("Error fetching electronics products:", error);
            }
        };

        fetchElectronics();
    }, []);
    return (
        <div>
            <div>{items.title}</div>
            {
                elecProduct.map((product) =>
                    <div>
                        <ul key={product.id}>

                            <li>{product.title}</li>
                        </ul>
                    </div>
                )

            }

        </div>
    )
}
export default Electronics