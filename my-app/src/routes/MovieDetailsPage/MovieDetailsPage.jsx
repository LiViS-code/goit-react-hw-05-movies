import { useState, useEffect } from "react";
import { Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import { LinkTo } from "../../App.styled";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { getMovieById } from "../../utils/ApiService";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    getMovieById(movieId).then((data) => {
      setMovieData(data);
    });
  }, [movieId]);

  const goBack = () => {
    navigation("/movies");
    console.log("location MovieDetailsPage :>> ", location);
  };

  return (
    <>
      <LinkTo to="" onClick={goBack}>
        &lArr; Go back
      </LinkTo>
      <MovieInfo movieData={movieData} />
      <p>Additional information</p>
      <ul>
        <li>
          <LinkTo to="cast" state={{ from: location }}>
            Cast
          </LinkTo>
        </li>
        <li>
          <LinkTo to="reviews">Review</LinkTo>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
