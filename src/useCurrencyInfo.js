import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const url = `https://v6.exchangerate-api.com/v6/5a9e18dc0335baf39bdd45a8/latest/${currency}`;
        fetch(url)
            .then(res => {
                console.log("status", res.status); // Log the response status   
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json(); 
            })
            .then((res) => {
                console.log('Parsed JSON response:', res);
                setData(res.conversion_rates);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [currency]);

    return data;
}


export default useCurrencyInfo;

