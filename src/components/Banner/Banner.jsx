import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import styles from "./Banner.module.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);
  console.log(movie);
  const baseURL = "https://image.tmdb.org/t/p/original";
  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseURL}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.banner__contents}>
        <div>
          <h2 className={styles.banner__title}>{movie.name || ""}</h2>
          <div>
            <button className={styles.banner__button}>Play</button>
            <button className={styles.banner__button}>My List</button>
          </div>
          <p className={styles.movie__overview}>{movie.overview}</p>
        </div>
      </div>
      <div className={styles.banner__fadebottom}></div>
    </header>
  );
};

export default Banner;
