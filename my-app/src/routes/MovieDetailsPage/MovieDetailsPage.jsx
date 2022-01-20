import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

import { getMovieById } from "../../utils/ApiService";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    getMovieById(movieId).then((data) => {
      setMovieData(data);
    });
  }, [movieId]);

  return (
    <>
      <MovieInfo movieData={movieData} />

      <p>Компонент с данными по актерам</p>

      <p>Компонент с ревью на фильм</p>
    </>
  );
}
