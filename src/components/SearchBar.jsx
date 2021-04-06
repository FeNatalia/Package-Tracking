import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";

export default function SearchBar(){
  // State
  const [query, setQuery] = useState("");

  //Property
  const history = useHistory();

 // Methods
  function onSearch(event) {
    event.preventDefault();
    history.push(`/results/${query}`);
  }
  
  return(
    /* Search bar */   
    <form onSubmit={onSearch} className="search-bar">
      <input
      type="text"
      placeholder="Search by sender name"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}