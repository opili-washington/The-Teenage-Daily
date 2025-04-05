import React, { useState, useEffect } from "react";
import "./App.css";
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";

const API_KEY = "d103567fb63446618c8eec319dbf2c24"; //My Api key

function App() {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setFilteredNews(data.articles);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [category]);
  
  useEffect(() => {
    setFilteredNews(
      news.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      )
    );
  }, [searchQuery, news]);

  return (
    <div className="app">
      <Navbar />
      <SearchBar setSearchQuery={setSearchQuery}/>
      <CategoryFilter setCategory={setCategory}/>
      <NewsList articles={filteredNews} />
      <Footer/>
    </div>
  );

}

export default App;
