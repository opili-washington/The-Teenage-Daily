import React from "react";
import NewsItem from './NewsItem';

function NewsList({ articles }) {
  return (
    <div className="news-list">
        {articles.length >0 ? (
            articles.map((articles, index) => <NewsItem key={index} article={article}/>)
        ) : (
            <p>Oh No news founds please</p>
        )}


    </div>
  );
}

export default NewsList;