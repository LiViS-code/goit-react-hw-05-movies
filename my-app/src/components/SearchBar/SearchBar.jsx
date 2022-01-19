import { useState } from "react";
import toastMsg from "../../utils/toastMsg";

export default function SearchBar({ findMovie }) {
  const [request, setRequest] = useState("");

  const handleInput = (e) => {
    setRequest(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRequest(request.trim());

    if (request === "") {
      toastMsg("Enter some kind of request", "warn");
      return;
    }

    findMovie(request);

    setRequest("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={request}
        placeholder="Enter movie name"
        onChange={handleInput}
      />
      <button type="submit">Search</button>
    </form>
  );
}
