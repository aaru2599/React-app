import axios from "axios";
import { useEffect, useState } from "react";

const SaleIsLive = () => {
  const [msg, setMsg] = useState(false);
  const [time, setTime] = useState("");
  const [saleTimes,setSaleTime]=useState("")
  const [product,setProduct]=useState([])
    const getProducts= async ()=>{
        try{
            const productData=await axios.get("https://fakestoreapi.com/products")
            console.log(productData);
            setProduct(productData.data)
        }catch(err){
console.log(err);
        }
    }

  const checkTime = () => {
    const now = new Date();
    setTime(now.toLocaleTimeString()); 

    const saleTime = new Date();
  const newSaleTime=  saleTime.setHours(23, 8,10);
    setSaleTime(newSaleTime)
// console.log("saleTime",saleTime);
    if (now >= saleTime) {
      setMsg(true);
    } else {
      setMsg(false);
    }
  };
  console.log(time);
  console.log("saleTimes",saleTimes);

  useEffect(() => {

    const interval = setInterval(checkTime, 1000);

   getProducts()
    checkTime();

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>{time}</h3>
      <h3>sale will be live on {saleTimes}</h3>
      
      {msg && <h2>Sale is live
        <div >
            {
                product.map((products)=>
                <div key={products.id}className="d-flex flex-wrap card w-50" >
                    <img src={products.image} width={100} />
                    <div>{products.id}</div>
                    <div>{products.title}</div>

                </div>
                )
            }
        </div>
      </h2>

      }
    </div>
  );
};

export default SaleIsLive;
