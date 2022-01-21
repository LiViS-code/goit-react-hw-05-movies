import { useState, useEffect } from "react";
import { LinkTo } from "../../App.styled";
import { Outlet, useParams } from "react-router-dom";
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
      <p>Additional information</p>
      <ul>
        <li>
          <LinkTo to="cast">Cast</LinkTo>
        </li>
        <li>
          <LinkTo to="reviews">Review</LinkTo>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
