import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import styles from './Row.module.css';
const Row = ({title, fetchURL, isLargePoster}) => {
  const [movies, setMovies] = useState([]);
  useEffect( () => {
      const fetchData = async () => {
          const request = await axios.get(fetchURL);
          setMovies(request.data.results);
          return request
      }

      fetchData();
  }, [fetchURL]);

   const baseURL = 'https://image.tmdb.org/t/p/original';
  return (
    <div className={styles.row__container}>
        {/* title */}
        <h3 className={styles.row__title}>{title}</h3>
        {/* movie poster */}
        <div className={styles.row__posters}>
            {/* several movies poster */}
            {movies.map( movie => (
                <img className={`${styles.row__poster} ${isLargePoster && styles.large_poster}`} src={`${baseURL}${isLargePoster ? movie.poster_path : movie.backdrop_path}`} alt="" />
            ))}
        </div>
    </div>
  )
}

export default Row