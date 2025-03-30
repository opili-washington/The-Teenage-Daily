import React from "react";

function SearchBar({ setSearchQuery }) {
  return (
    <div className="search-bar">
       <input
         type="text"
         placeholder="Search News..." 
         onChange={(e) => setSearchQuery(e.target.value)}
         />
    </div>
  );
}

export default SearchBar;