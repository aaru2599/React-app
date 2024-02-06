import React from 'react'
import useAPICall from './useAPICall'

const ApiLayout = () => {
    const[apiData]=useAPICall("https://fakestoreapi.com/products")
    console.log(apiData);
  return (
    <ul>
        <h2>FakeStore</h2>
{
apiData.map((data)=>
<li key={data.id}>{data.title}</li>
)

}
    </ul>
  )
}

export default ApiLayout