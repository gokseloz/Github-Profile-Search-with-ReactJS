import "./App.css";
import React, { useContext } from "react";
import Search from "./components/Search";
import ProfileComp from "./components/ProfileComp";
import Loader from "react-loader-spinner";
import { AppContext } from "./Context";

function App() {
  const data = useContext(AppContext);

  return (
    <div className="appWrapper">
      <Search />
      {data.loading && (
        <Loader
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
          style={{ textAlign: "center", marginTop: "5rem" }}
        />
      )}
      {data.profile && <ProfileComp />}
    </div>
  );
}

export default App;
