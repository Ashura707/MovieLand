import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=875d7fb1";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (title) => {
    if (title.trim() === "") {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("Failed to fetch movies. Please try again later.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search for movies"
        />
        <button
          onClick={() => searchMovies(searchTerm)}
          disabled={!searchTerm.trim()}
          aria-label="Search"
        >
          <img src={SearchIcon} alt="search" />
        </button>
      </div>
      {loading ? (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      ) : error ? (
        <div className="error">
          <h2>{error}</h2>
        </div>
      ) : (
        <div>
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
