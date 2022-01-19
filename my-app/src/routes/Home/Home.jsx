import { useEffect, useState } from "react";
import { Title } from "../../App.styled";
import MovieList from "../../components/MovieList/MovieList";
import { getMovieTrending } from "../../utils/ApiService";

export default function Home() {
  const [movieTrending, setMovieTrending] = useState([]);

  useEffect(() => {
    getMovieTrending().then((data) => {
      setMovieTrending(data.results);
    });
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MovieList movieData={movieTrending} />
    </>
  );
}
