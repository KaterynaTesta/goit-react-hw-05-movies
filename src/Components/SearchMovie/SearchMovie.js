// import { useState } from "react";
// import s from "./SearchMovie.module.css";
// import { ImSearch } from "react-icons/im";

// export default function Searchbar(onSubmit) {
//   const [searchInfo, setSearchInfo] = useState("");

//   const handleInputChange = (e) => {
//     setSearchInfo({ searchInfo: e.currentTarget.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (searchInfo.trim() === "") {
//       return alert("No matches found");
//     }
//     onSubmit(searchInfo);
//     setSearchInfo("");
//   };

//   return (
//     <header className={s.Searchbar}>
//       <form className={s.SearchForm} onSubmit={handleSubmit}>
//         <button type="submit" className={s.SearchFormButton}>
//           <span className={s.SearchFormButtonLabel}>Search</span>
//           <ImSearch style={{ marginRight: 8 }} />
//         </button>

//         <input
//           className={s.SearchFormInput}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search movie"
//           onChange={handleInputChange}
//           value={searchInfo}
//         />
//       </form>
//     </header>
//   );
// }
