import { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { fetchMovies } from "../services/movies-api";
import s from "./Movies.module.css";
import { ImSearch } from "react-icons/im";
export default function MoviesView() {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") ?? "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryInput = e.target.elements.query.value.toLowerCase();
    if (!queryInput.trim()) {
      alert("Enter query");
      return;
    }

    if (query === queryInput) {
      return;
    }
    // setQuery(queryInput);
    history.push({ ...location, search: `query=${queryInput}` });
    e.target.elements.query.value = "";
  };

  useEffect(() => {
    if (!query) return;
    fetchMovies(query).then(setMovies);
  }, [query]);

  return (
    <>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <input className={s.SearchFormInput} name="query" />
          <button className={s.SearchFormButton} type="submit">
            <ImSearch style={{ marginRight: 8 }} />
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li className={s.listItem} key={movie.id}>
              {/* <Link to={`${url}/${movie.id}`}>{movie.title}</Link> */}
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { params: `query=${query}` },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
