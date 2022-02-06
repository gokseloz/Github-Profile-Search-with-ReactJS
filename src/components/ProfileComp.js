import React, { useState, useContext } from "react";
import { HiArrowCircleRight, HiArrowCircleDown } from "react-icons/hi";
import { FaRegBuilding, FaStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { BiGitRepoForked } from "react-icons/bi";
import { AppContext } from "../Context";

const ProfileComp = () => {
  const [open, setOpen] = useState(false);
  const data = useContext(AppContext);

  return (
    <div>
      <section className="github-profile">
        <div className="github-profile-container">
          <article className="github-profile-pic">
            <img src={data.profile.avatar_url} alt="profile"></img>
          </article>
          <article className="github-profile-infos">
            <div>
              <span className="github-profile-name">
                {data.profile.name ? data.profile.name : "Not Found"}
              </span>
              <a href={data.profile.html_url} target="_blank" rel="noreferrer">
                <span className="github-profile-login">
                  @{data.profile.login ? data.profile.login : "Not Found"}
                </span>
              </a>
            </div>

            <p>{data.profile.bio}</p>
            <p>
              <FaRegBuilding />
              <span className="github-profile-company">
                {data.profile.company ? data.profile.company : "Not Found"}
              </span>
            </p>
            <p>
              <GoLocation />
              <span className="github-profile-location">
                {data.profile.location ? data.profile.location : "Not Found"}
              </span>
            </p>
            <p>
              <GrAttachment />
              <a href={data.profile.blog} target="_blank" rel="noreferrer">
                <span className="github-profile-blog">
                  {data.profile.blog
                    ? data.profile.blog.slice(
                        data.profile.blog.search("linkedin")
                      )
                    : "Not Found"}
                </span>
              </a>
            </p>
            <div className="github-profile-infos-bottom">
              <p>{data.followers.length} Followers</p>
              <p>{data.following.length} Followings</p>
              <p>{data.repos.length} Repos</p>
            </div>
          </article>
        </div>
      </section>
      <section className="github-repositories">
        <div className="github-repositories-container">
          <div className="github-profile-repository-wrapper">
            <div className="github-profile-repo-header-wrapper">
              <h2 className="github-profile-repo-header">Repositories</h2>
              {open ? (
                <HiArrowCircleDown
                  style={{ fontSize: "2rem", cursor: "pointer" }}
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              ) : (
                <HiArrowCircleRight
                  style={{ fontSize: "2rem", cursor: "pointer" }}
                  onClick={() => setOpen(true)}
                />
              )}
            </div>

            {open
              ? data.repos.map((repo, index) => {
                  return (
                    <div className="github-profile-repo" key={index}>
                      <a
                        href={repo.html_url}
                        className="github-profile-repo-name"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{repo.name}</span>
                      </a>
                      <p className="github-profile-repo-description">
                        {repo.description}
                      </p>
                      <p className="github-profile-repo-language">
                        {repo.language}
                      </p>
                      <div className="github-profile-repo-starFork">
                        <span className="github-profile-repo-star">
                          <FaStar />
                          {repo.stargazers_count}
                        </span>
                        <span className="github-profile-repo-fork">
                          <BiGitRepoForked />
                          {repo.forks}
                        </span>
                      </div>
                    </div>
                  );
                })
              : data.repos.slice(0, 2).map((repo, index) => {
                  return (
                    <div className="github-profile-repo" key={index}>
                      <a
                        href={repo.html_url}
                        className="github-profile-repo-name"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{repo.name}</span>
                      </a>
                      <p className="github-profile-repo-description">
                        {repo.description}
                      </p>
                      <p className="github-profile-repo-language">
                        {repo.language}
                      </p>
                      <div className="github-profile-repo-starFork">
                        <span className="github-profile-repo-star">
                          <FaStar />
                          {repo.stargazers_count}
                        </span>
                        <span className="github-profile-repo-fork">
                          <BiGitRepoForked />
                          {repo.forks}
                        </span>
                      </div>
                    </div>
                  );
                })}
            <button
              className="showRepo"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? "Show less" : "Show all"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileComp;
