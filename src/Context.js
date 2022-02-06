import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userName, setUserName] = useState();
  const [profile, setProfile] = useState("");
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [repos, setRepos] = useState([]);
  const [tryAgain, setTryAgain] = useState(false);
  const [loading, setLoading] = useState(false);

  const api = `https://api.github.com/users/${userName}`;

  async function fetchUserDetails(data) {
    const resFollowers = await fetch(`${api}/followers`);
    const followers = await resFollowers.json();

    const resFollowings = await fetch(`${api}/following`);
    const followings = await resFollowings.json();

    const resRepos = await fetch(`${api}/repos`);
    const repos = await resRepos.json();

    setProfile(data);
    setFollowers(followers);
    setFollowing(followings);
    setRepos(repos);

    setTryAgain(false);
    setLoading(false);
  }

  const submitHandle = (e) => {
    e.preventDefault();

    if (userName) {
      setLoading(true);
      setProfile("");
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            setTryAgain(true);
            setLoading(false);
          } else {
            fetchUserDetails(data);
          }
        });
    } else {
      alert("Please type a user name");
    }
  };

  return (
    <AppContext.Provider
      value={{
        submitHandle,
        userName,
        setUserName,
        tryAgain,
        loading,
        profile,
        followers,
        following,
        repos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
