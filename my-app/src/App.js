import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotfoundPage from "./components/NotfoundPage/NotfoundPage";
import Home from "./routes/Home/Home";
import MoviesPage from "./routes/MoviesPage/MoviesPage";
import MovieDetailsPage from "./routes/MovieDetailsPage/MovieDetailsPage";
// import MovieList from "./components/MovieList/MovieList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="movies/:movieId/cast" element={<MovieDetailsPage />} />
        <Route path="movies/:movieId/reviews" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
}
