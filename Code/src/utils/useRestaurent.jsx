import { useState ,useEffect } from "react";
import { FETCH_MENU } from "../componenets/config";

const useRestaurent = (id) => {

    const [restaurants,setRestaurent]   = useState({});
    useEffect(() => {
        getRestaurentInfo();
      }, []);
    
      async function getRestaurentInfo() {
        const data = await fetch(
          FETCH_MENU +
            id
        );
        const json = await data.json();
    
        console.log(json.data);
    
        setRestaurent(json?.data);
      }

      return restaurants ;


};

export default useRestaurent
