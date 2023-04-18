import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

// const url = "https://medrum.herokuapp.com/articles";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // const [isFetching, setIsFetching] = useState(false);
  const [isFetching, setIsFetching ] = useInfiniteScroll();
  

  const loadData = () =>{
    let url = "https://medrum.herokuapp.com/articles";
    axios.get(url).then(res => {
      setData(res.data);
    });
  }
  const moreData = useCallback( () => {
    let url = `https://medrum.herokuapp.com/feeds/?source=5718e53e7a84fb1901e05971&page=${page}&sort=popular`;
    axios.get(url).then(res => {
      setData([...data, ...res.data]);
      setPage(page+1)
      setIsFetching(false)
    });
  }, [data, page, setIsFetching] )

  // moved to hook
  // const isScrolling = () => {
  //   if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
  //     // we're scrolling within window, not yet at bottom
  //     return;
  //   }
  //   else {
  //     // inner height + distance from top = total height of document (web page ----> all data on page)
  //     console.log("reached bottom");
  //     setIsFetching( true )
  //   }
  // }

  // load initial data
  // set scroll event listener on the window
  // clean up function to remove listener on unmount
  useEffect(() => {
    loadData();
    // move this to hook
    // window.addEventListener("scroll", isScrolling);
    // return () => window.removeEventListener("scroll", isScrolling); // cleanup on mount
  }, []);

  useEffect( () => {
    if( isFetching) {
      moreData();
    }
  },[isFetching, moreData])


  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul className="list-group-ul">
        {data.map((article, key) => (
          <li className="list-group-li" key={key}>
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default InfiniteScroll;