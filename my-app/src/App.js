import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotfoundPage from "./components/NotfoundPage/NotfoundPage";
import Home from "./routes/Home/Home";
import MoviesPage from "./routes/MoviesPage/MoviesPage";
import MovieDetailsPage from "./routes/MovieDetailsPage/MovieDetailsPage";
import Cast from "./components/Cast/Cast";
import Rewiews from "./components/Rewiews/Rewiews";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Rewiews />} />
        </Route>
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
}
