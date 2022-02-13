import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = "https://my.api.mockaroo.com";

const useAxios = ({url}) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const { data: response } = await axios.get(url);
            setData(response);
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        };
    
        fetchData();
      }, [url]);

  return {loading , data}
}

export default useAxios