import { useState, useEffect, Suspense } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { Link } from "components/Link/Link";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { getMovieById } from "utils/ApiService";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();
  const goBackURL = location?.state?.from ?? "/";

  useEffect(() => {
    getMovieById(movieId).then(setMovieData);
  }, [movieId]);

  return (
    <>
      <Link to={goBackURL}>&lArr; Go back</Link>
      <MovieInfo movieData={movieData} />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: goBackURL }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: goBackURL }}>
            Review
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
