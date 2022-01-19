import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotfoundPage from "./components/NotfoundPage/NotfoundPage";
import Home from "./routes/Home/Home";
import Movies from "./routes/Movies/Movies";
import MoviesCard from "./routes/MovieCard/MovieCard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesCard />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
}
