import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFilmsTrending } from "../utils/ApiService";

export default function Home() {
  const [filmsTrending, setFilmsTrending] = useState([]);

  useEffect(() => {
    getFilmsTrending().then((data) => {
      setFilmsTrending(data.results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {filmsTrending.map(({ id, original_title, poster_path }) => {
        return (
          <li key={id}>
            <Link to={`/${id}`}>{original_title}</Link>
          </li>
        );
      })}
    </>
  );
}
