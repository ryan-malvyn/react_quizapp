import { useState,useEffect } from "react"

const FetchQuestions = (url) => {
    const [data,setData] = useState(null)
    const [errMessage, setErrMessage] = useState(null)

        useEffect(()=> {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw Error('its fkd up dude')
            }
            return response.json()
        })
        .then(data => {
            setData(data)
        })
        .catch(err => {
            setErrMessage(err.message);
        })
    },[url])
     
    return { data, errMessage }
}
 
export default FetchQuestions;