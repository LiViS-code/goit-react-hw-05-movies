import { useState, useEffect, Suspense } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { LinkTo } from "../../App.styled";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { getMovieById } from "../../utils/ApiService";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();
  const cameFrom = location?.state?.from ?? "/";

  useEffect(() => {
    getMovieById(movieId).then((data) => {
      setMovieData(data);
    });
  }, [movieId]);

  return (
    <>
      <LinkTo to={cameFrom}>&lArr; Go back</LinkTo>
      <MovieInfo movieData={movieData} />
      <p>Additional information</p>
      <ul>
        <li>
          <LinkTo to="cast" state={{ from: { cameFrom } }}>
            Cast
          </LinkTo>
        </li>
        <li>
          <LinkTo to="reviews" state={{ from: { cameFrom } }}>
            Review
          </LinkTo>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
