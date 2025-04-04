import React from "react";
import NewsItem from "./NewsItem";

function NewsList ({articles =[] }) {

  return (
    <div className="news-list">
      {articles.length> 0 ? (
       articles.map((article, index) =>(
       <NewsItem key={index} article={article} />
      ))
  ):(
    <p>No news found, please try again</p>
  ) }

    </div>
  );
}

export default NewsList;