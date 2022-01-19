// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

//trending
// /trending/movie/week

// /search/movie
const API_KEY = "b7df999202e1c3618d01db23ce0076f0";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getMovieTrending() {
  try {
    let responce = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return await responce.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(id) {
  try {
    let responce = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieByName(name) {
  try {
    let responce = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}`
    );
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
