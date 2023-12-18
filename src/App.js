import React, { useEffect,useRef,useState } from 'react'
import './App.css'
import MovieCard from './movieCard'
import   SearchIcon from './assets/search.svg'






////OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e3b5d923
////  API KEY e3b5d923


const API_URL=`http://www.omdbapi.com/?apikey=e3b5d923`


function App() {
    // const [searchTerm, setSearchTerm] = useState("");
    const InputValue=useRef()
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      searchMovies("Batman");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };
  
    return (
      <div className="app">
        <h1>MovieLand</h1>
  
        <div className="search">
          <input
          ref={InputValue}
          onChange={()=>{searchMovies(InputValue.current.value)}}
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
  };
  

export default App;
