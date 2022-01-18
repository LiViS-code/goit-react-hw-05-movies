// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

//trending
// /trending/movie/week

// /search/movie
const API_KEY = "b7df999202e1c3618d01db23ce0076f0";
const BASE_URL = "https://api.themoviedb.org/3";

export function ApiService(query) {
  return null;
}

export async function getFilmsTrending() {
  try {
    let responce = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return await responce.json();
  } catch (error) {
    console.log(error);
  }
}
