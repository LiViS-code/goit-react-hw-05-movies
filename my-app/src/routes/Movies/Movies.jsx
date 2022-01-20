import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { getMovieByName } from "../../utils/ApiService.js";

export default function Movies() {
  const [movieData, setMovieData] = useState(null);
  let { id, query } = useParams();

  useEffect(() => {
    console.log("зашел в поиск");
    console.log("movieData", movieData);
  }, [id, movieData]);

  const findMovie = (request) => {
    getMovieByName(request).then((data) => {
      console.log("search result:", data.results);
      setMovieData(data.results);
      query = request;
    });
  };

  return (
    <>
      <SearchBar findMovie={findMovie} />
      <p>{query}</p>
      {movieData && <MovieList movieData={movieData} />}
    </>
  );
}
