import { useEffect, useState, useCallback } from "react";

const useInfiniteScroll = () => {
    const [isFetching, setIsFetching] = useState(false);

    const isScrolling = useCallback( () => {
        if (
          window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight ||
          isFetching
        ) return;
        else setIsFetching(true);
    }, [isFetching] )
  
    // adds scroll listener to window
    useEffect(() => {
      window.addEventListener("scroll", isScrolling);
      return () => window.removeEventListener("scroll", isScrolling);
    }, [isScrolling]);
  

    useEffect(() => {
      if (!isFetching) return;
        
      return () => {}; // cleanup
    }, [isFetching] )

    return [isFetching, setIsFetching];
  }
  
  export default useInfiniteScroll;