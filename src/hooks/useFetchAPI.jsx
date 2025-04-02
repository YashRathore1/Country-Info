import { useEffect, useState } from "react"

const useFetchAPI = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch(url)
        .then((data) => data.json())
        .then((data) => {
            if(Array.isArray(data)){
                setData(data)

            }
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(setIsLoading(false))
    }, [url])
    return ({data, isLoading})
}
 export default useFetchAPI;