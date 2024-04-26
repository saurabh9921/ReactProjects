import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    
   // console.log(currency)
    const [data, setData] = useState({})
    useEffect(() => {
       // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        
      //fetch(`https://v6.exchangerate-api.com/v6/3f3cf1b371bb0c37c7cb37a5/latest/${currency}`)
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
       .then((res) => res.json())
        .then((res) => setData(res[currency]))
       // console.log(data);
    }, [currency])
    //console.log(data);
    return data
}

export default useCurrencyInfo;