import { useEffect, useState } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import s from "./HomeView.module.css";
import { getTrending } from "../services/movies-api";

export default function HomeView() {
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();
  var slugify = require("slugify");

  useEffect(() => {
    getTrending().then(({ results }) => setMovies(results));
  }, []);

  return (
    <div className={s.homePage}>
      <h1 className={s.header}>Trending today</h1>
      {movies &&
        movies.map(({ id, title }) => (
          <li className={s.item} key={id}>
            <Link
              to={{
                pathname: `${url}movies/${slugify(`${title} ${id}`, {
                  lower: true,
                })}`,
                state: { from: location },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
    </div>
  );
}
