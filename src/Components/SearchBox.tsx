import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    navigate(`/search?term=${input}`);
    console.log(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords..."
        className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
