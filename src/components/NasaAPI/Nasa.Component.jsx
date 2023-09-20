import { useEffect, useState } from "react"

const NasaComponent = () => {
    const [marsh,setMarsh]=useState({});
    const cameraId={
        color:"white",
        position:"absolute",
        top:"10px",
        left:"10px",
        padding:"3px",
        backgroundColor:"darkgreen",
        borderRadius:"10px"
    }
    const cameraImg={
        position:"relative"
    }
    
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then((response)=>response.json())
        .then(data=>{
            setMarsh(data)
        })
        
    },[])
    return (
        <div className="container-fluid">
            <h2>Marsh Rower data</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Preview</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Rover Landing Date</th>
                        <th>Rover Launched Date</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {
                        marsh.photos?.map((item)=>
                            <tr key={item.id}> 
                                <td>{item.id}</td>
                                <td style={cameraImg}>
                                 <a href={item.img_src} target="_blank"> <img src={item.img_src} alt="img" width={200}height={100}/></a>  
                                <p style={cameraId}>{item.camera.id}</p>
                                </td>
                                <td>{item.camera.full_name}</td>
                                <td>{item.rover.name}</td>
                                <td>{item.rover.landing_date}</td>
                                <td>{item.rover.launch_date}</td>
                            </tr>
                            )
                    }
                </tbody>

            </table>
        </div>
    )
}
export default NasaComponent