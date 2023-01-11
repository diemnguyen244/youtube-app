import React, { useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  return (
    <header className="w-full flex p-5 text-2xl boder-b border-zinc-600 mb-5">
      <Link className="flex  items-center" to="/">
        <BsYoutube className="text-4xl text-red-700" />
        <h1 className="text-3xl ml-1">YouTube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-1/2 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search"
          value={text}
          onChange={handleChange}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
