import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { getMovieByName } from "../../utils/ApiService.js";

export default function Movies() {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("зашел в поиск");
  }, [id]);

  const findMovie = (request) => {
    getMovieByName(request).then((data) => {
      console.log("search result:", data.results);
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
