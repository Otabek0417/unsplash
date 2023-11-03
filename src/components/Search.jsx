import React, { useRef, useState } from "react";

function Search({ newUrl }) {
  const inputVal = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputVal.current.value;
    inputVal.current.value = "";
    newUrl(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          id="search"
          ref={inputVal}
          type="text"
          placeholder="write whatever you want"
        />
        <img src="./ei_search.svg" alt="search" width={27} height={27} />
      </label>
      <button>submit</button>
    </form>
  );
}

export default Search;
