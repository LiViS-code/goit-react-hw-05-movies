import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotfoundPage from "./components/NotfoundPage/NotfoundPage";
import Home from "./routes/Home/Home";
import Movies from "./routes/Movies/Movies";
import MovieCard from "./routes/MovieCard/MovieCard";
// import MovieList from "./components/MovieList/MovieList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieCard />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
}
