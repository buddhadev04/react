import { useEffect, useState } from 'react';
import axios from 'axios';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const baseUrl = `https://open.er-api.com/v6/latest/${currency}`; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        console.log(response.data.rates); 
        setData(response.data.rates); 
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

    fetchData()
  }, [currency]); 

  return data; 
}

export default useCurrencyInfo;
