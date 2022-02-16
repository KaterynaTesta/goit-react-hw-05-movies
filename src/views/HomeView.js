import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import s from "./HomeView.module.css";
import { fetchTrendingMovies } from "../services/movies-api";

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
