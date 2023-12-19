import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import MovieCard from "./movieCard";
import SearchIcon from "./assets/search.svg";

const API_URL = `https://moviesapi.ir/api/v1/movies?`;

function App() {
  const InputValue = useRef();
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}q=${title}`);
    const data = await response.json();

    setMovies(data.data);

    console.log(data.data);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          ref={InputValue}
          onChange={() => {
            searchMovies(InputValue.current.value);
          }}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(InputValue.current.value)}
        />
      </div>

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
}

export default App;
