
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

// 1923e27e (The API URL
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Spider-Man");
  }, []);

  // It will take some time to fetch these movies
  // The searchMovies is accepting a search title 
  const searchMovies = async (title) => {
    // This will call the API
    const response = await fetch(`${API_URL}&s=${title}`);

    // Once we get the response, we can store it in data
    const data = await response.json();
    console.log(data);

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          /* Everytime the user type something in the input and click the button
          the start is going to dynamically change*/
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* Checking the existence of a movie, if there is a movie from the search render the movie, 
       otherwise render the msg "no movies found" */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;