import { Routes, Route } from "react-router-dom";
import { Container } from "./App.styled";
import Layout from "./components/Layout/Layout";
import Home from "./routes/Home";
import Movies from "./routes/Movies";

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </Container>
  );
}
