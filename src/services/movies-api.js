import axios from "axios";
const API_KEY = "7c328987d645579f0f7348663966a7f9";
const BASE_URL = "https://api.themoviedb.org/3";
export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch {
    alert("Something went wrong");
  }
}

export async function fetchMovieInfo(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch {
    alert("Something went wrong");
  }
}

export async function fetchMovieCast(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch {
    alert("Something went wrong");
  }
}

export async function fetchMovieReviews(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch {
    alert("Something went wrong");
  }
}

export async function fetchMovies(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    return response.data.results;
  } catch {
    alert("Something went wrong");
  }
}
