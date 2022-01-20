// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

//trending
// /trending/movie/week

// /search/movie
const API_KEY = "b7df999202e1c3618d01db23ce0076f0";
const BASE_URL = "https://api.themoviedb.org/3";

async function ApiService(URL) {
  try {
    let responce = await fetch(URL);
    return await responce.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieTrending() {
  const URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  return ApiService(URL);
}

export async function getMovieById(id) {
  const URL = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  return ApiService(URL);
}

export async function getMovieByName(name) {
  const URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}`;
  return ApiService(URL);
}
