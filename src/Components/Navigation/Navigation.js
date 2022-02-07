import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const location = useLocation();
  return (
    <nav>
      <NavLink
        style={{ marginRight: "15px" }}
        exact
        to={{
          pathname: "/",
          state: { from: location },
        }}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to={{
          pathname: "/movies",
          state: { from: location },
        }}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  );
}
// const Navigation = () => (
//   <nav>
//     <NavLink
//       exact
//       to="/"
//       className={styles.link}
//       activeClassName={styles.activeLink}
//     >
//       Home
//     </NavLink>
//     <NavLink
//       to="/movies"
//       className={styles.link}
//       activeClassName={styles.activeLink}
//     >
//       Movies
//     </NavLink>
//   </nav>
// );
// export default Navigation;
