import { useEffect, useState } from "react";

const useOffline = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(false);
    };
    const handleOffline = () => {
      setIsOnline(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return ()=>{
        window.removeEventListener("online" ,handleOnline) ;
        window.removeEventListener("offline" ,handleOffline) ;
    }

  }, []);

  return isOnline;
};

export default useOffline;
