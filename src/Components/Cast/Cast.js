import { useState, useEffect } from "react";
import { fetchMovieCast } from "../../services/movies-api";
import s from "./Cast.module.css";
export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast.length > 0 && (
        <ul className={s.castList}>
          {" "}
          {cast.map((actor) => (
            <div className={s.itemWrapper}>
              <li className={s.castName} key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : "Oops, nothing found"
                  }
                  alt={actor.name}
                />
                <p>{actor.name}</p>
                <p>character: {actor.character}</p>
              </li>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}
// =================
// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import { getCastMovieInfo } from "../../services/movies-api";
// import s from "./Cast.module.css";
// import { nanoid } from "nanoid";

// const IMG_PATH = "https://image.tmdb.org/t/p/original";

// export default function Cast() {
//   const [cast, setCast] = useState([]);
//   const { slug } = useParams();
//   const movieId = slug.match(/[a-z0-9]+$/)[0];

//   useEffect(() => {
//     getCastMovieInfo(movieId)
//       .then((data) => setCast(data.cast))
//       .then(() =>
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: "smooth",
//         })
//       );
//   }, [movieId]);

//   return (
//     <>
//       {cast && (
//         <div>
//           <ul className={s.castList}>
//             {cast.map((actor) => (
//               <div className={s.itemWrapper} key={nanoid()}>
//                 {actor.profile_path ? (
//                   <img
//                     src={`${IMG_PATH}` + actor.profile_path}
//                     alt={actor.name}
//                     width="135"
//                   />
//                 ) : (
//                   "Sorry, no info"
//                 )}

//                 <li className={s.castName}>{actor.name}</li>
//               </div>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }
