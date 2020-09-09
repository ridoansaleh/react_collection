import React, { useEffect, useState, useCallback } from "react";
import debounce from "./debounce";

function Previous(props) {
  // const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (query) => {
    const { cache } = props;
    try {
      if (cache.current[query]) {
        const data = cache.current[query];
        setData(data);
      } else {
        const response = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${query}`
        );
        const data = await response.json();
        cache.current[query] = data.hits;
        setData(data.hits);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const debounceOnChange = useCallback(debounce(fetchData, 400), []);

  // useEffect(() => {
  //   const { cache } = props;
  //   const fetchData = async (url) => {
  //     if (cache.current[url]) {
  //       const data = cache.current[url];
  //       setData(data);
  //     } else {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       cache.current[url] = data.hits;
  //       setData(data.hits);
  //     }
  //   };
  //   fetchData(`https://hn.algolia.com/api/v1/search?query=${query}`);
  // }, [query]);

  return (
    <div>
      <h1>Please Search !</h1>
      <input
        name="query"
        placeholder="Enter your query"
        // onChange={(e) => setQuery(e.target.value)}
        onChange={(e) => debounceOnChange(e.target.value)}
      />
      <ol className="data-wrapper">
        {data.map((d) => {
          if (d.title) {
            return <li key={d.objectID}>{d.title}</li>;
          }
          return null;
        })}
      </ol>
    </div>
  );
}

export default Previous;
