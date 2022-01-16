import { Routes, Route } from "react-router-dom";
import { Container } from "./App.styled";
import AppBar from "./components/AppBar/AppBar";
import Home from "./routes/Home";
import Movies from "./routes/Movies";

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </Container>
  );
}
