import { useEffect, useState } from "react"

function useAPICall(propData) {

    const [apiData, setApiData] = useState({})
    const url=propData
    useEffect(() => {

        fetch(url)
            .then((res) => res.json())
            .then((data) => setApiData(data))

    }, [])
    console.log("apiData", apiData);
    return ([apiData])
}

export default useAPICall