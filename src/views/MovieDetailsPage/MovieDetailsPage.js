import {
  NavLink,
  useParams,
  useRouteMatch,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { fetchMovieInfo } from "../../services/movies-api";
import Cast from "../../Components/Cast/Cast";
import ReviewsView from "../../Components/Reviews/Reviews";
import GoBackBtn from "../../Components/GoBackBtn/GoBackBtn";
import s from "./MoviesDetailsPage.module.css";
// import MoviesView from "../MoviesPage";
export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const routerState = useRef(null);
  const location = useLocation();
  // const history = useHistory();

  useEffect(() => {
    if (routerState.current) return;
    routerState.current = location.state;
  }, [location.state]);

  useEffect(() => {
    fetchMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  // const handleGoBack = () => {
  //   const url = routerState.current
  //     ? `/movies?${routerState.current?.params}`
  //     : "/movies";
  //   history.push(url);
  // };

  return (
    <>
      <GoBackBtn />
      {movie && (
        <>
          <div>
            <img
              className={s.img}
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                  : "Not found"
              }
              alt={movie.title}
            />
            <div>
              <h2>
                {movie.title} ({movie.release_date.substring(0, 4)})
              </h2>
              <p>User Score {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map((genre) => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </div>
          <hr />
          <ul>
            Additional information
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <hr />
        </>
      )}
      <Route path={`${path}/cast`}>
        {movie && <Cast movieId={movie.id} />}
      </Route>

      <Route path={`${path}/reviews`}>
        {movie && <ReviewsView movieId={movie.id} />}
      </Route>
    </>
  );
}
