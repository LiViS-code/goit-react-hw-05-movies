import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

import { getMovieById } from "../../utils/ApiService";

export default function MovieCard() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    getMovieById(id).then((data) => {
      setMovieData(data);
    });
  }, [id]);

  return (
    <>
      <MovieInfo movieData={movieData} />

      <p>Компонент с данными по актерам</p>

      <p>Компонент с ревью на фильм</p>
    </>
  );
}
