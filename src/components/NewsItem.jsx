import React from "react";

function NewsItem( {article} ) {
  return (
    <div className="news-item">
        <img src={article.urlToImage} alt={article.title}/>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href ={article.url} target="_blank" rel="noopener noreferrer">
            Read More
        </a>

    </div>
  );
}

export default NewsItem;