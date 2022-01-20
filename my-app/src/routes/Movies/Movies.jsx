import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { getMovieByName } from "../../utils/ApiService.js";

export default function Movies() {
  const [movieData, setMovieData] = useState(null);
  // useSt;

  const findMovie = (request) => {
    getMovieByName(request).then((data) => {
      setMovieData(data.results);
    });
  };

  return (
    <>
      <SearchBar findMovie={findMovie} />
      {movieData && <MovieList movieData={movieData} />}
    </>
  );
}
