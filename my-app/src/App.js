import { Routes, Route } from "react-router-dom";
import { Container } from "./App.styled";
import AppBar from "./components/AppBar/AppBar";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />

        <Route path="/movies" element={<MoviesView />} />
      </Routes>
    </Container>
  );
}
