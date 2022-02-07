import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Triangle } from "react-loader-spinner";
import Container from "./Components/Container/Container";
import Navigation from "./Components/Navigation/Navigation";
// import Appbar from "./Components/Appbar/Appbar";
// import HomeView from "./views/HomeView";
// import MoviesPage from "./views/MoviesPage";
// import NotFoundView from "./views/notFoundView";
const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: 'HomePage' */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: 'MoviesPage' */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: 'MovieDetailsPage'*/
  )
);
const NotFoundView = lazy(() =>
  import("./views/notFoundView.js" /* webpackChunkName: 'NotFoundView' */)
);
export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense
        fallback={
          <Triangle
            style={{ textAlign: "center", marginTop: "15px" }}
            type="Audio"
            color="#3f81e4"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:slug">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
