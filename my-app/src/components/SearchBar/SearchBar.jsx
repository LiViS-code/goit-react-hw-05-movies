import { useState } from "react";
import toastMsg from "../../utils/toastMsg";
import { SearchForm, SearchInput, SearchButton } from "./SearchBar.styled";

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
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="search"
        value={request}
        placeholder="Enter movie name"
        onChange={handleInput}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
}
