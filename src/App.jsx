import React, { useState, useEffect } from "react";
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";

const API_KEY = "2b515ad26bab4039b2e3bb9f7144a8e9"; //My api key

function App () {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] =useState("");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) =>{
       setNews(data.articles);
       setFilteredNews(data.articles);
    })
    .catch((error) => console.error("Error fetching news:", error));
  }, [category] );

  useEffect(() => {
    setFilteredNews(
      news.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, news]);

  return(
    <div className="app">
        <Navbar />
        <SearchBar setSearchQuery={setSearchQuery} />
        <CategoryFilter setCategory={setCategory} />
        <NewsList articles={filteredNews} />
        <Footer />
    </div>
  );
}

export default App;