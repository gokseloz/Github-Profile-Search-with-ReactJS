import React, { useContext } from "react";
import TryAgain from "./TryAgain";
import { AppContext } from "../Context";

const Search = () => {
  const data = useContext(AppContext);

  return (
    <div>
      <section className="github-search">
        <div className="github-search-container">
          <h1>Github Profile Search</h1>
          <form className="github-search-form" onSubmit={data.submitHandle}>
            <input
              className="github-search-input"
              type="text"
              value={data.userName}
              placeholder="search username"
              onChange={(e) => data.setUserName(e.target.value)}
            />
            <button className="github-search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </section>
      {data.tryAgain && <TryAgain />}
    </div>
  );
};

export default Search;
