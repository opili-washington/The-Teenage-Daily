import React from "react";

function CategoryFilter({ setCategory }) {
    const categories = ["general", "technology", "sports", "health", "entertainment"];

  return (
    <div className="category-filter" >
     <select onChange={(e) =>setCategory(e.target.value)}  >
       {categories.map((cat) =>(
         <option key={cat} value={cat} >
           {cat.charAt(0).toUpperCase() + cat.slice(1)}
         </option>
       ))}
     </select>
    </div>
  );
}

export default CategoryFilter;