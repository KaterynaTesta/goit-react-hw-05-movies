const KEY = "7c328987d645579f0f7348663966a7f9";
const BASE_URL = "https://api.themoviedb.org/3";
function fetchData(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error("Not found"));
  });
}

export function getTrending() {
  return fetchData(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

export function getMovieByQuery(searchQuery) {
  return fetchData(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );
}

export function getMovieDetails(movieId) {
  return fetchData(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
}

export function getCastMovieInfo(movieId) {
  return fetchData(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}

export function getMovieReview(movieId, page) {
  return fetchData(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}
// async function fetchAPI(url = "") {
//   const response = await fetch(url);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error("Something went wrong"));
// }

// export function fetchTrendingMovies() {
//   return fetchAPI(`${BASE_URL}trending/all/day?api_key=${KEY}`);
// }

// export function fetchByKeyWord(keyWord, page) {
//   return fetchAPI(
//     `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=${page}&include_adult=false&query=${keyWord}`
//   );
// }

// export function fetchMovieDetails(movieId) {
//   return fetchAPI(`${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`);
// }

// export function fetchMovieCredits(movieId) {
//   return fetchAPI(
//     `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
//   );
// }

// export function fetchMovieReviews(movieId) {
//   return fetchAPI(
//     `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
//   );
// }
