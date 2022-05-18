import { useState, useEffect } from "react";
import "../styles/home-component.css";

function Home() {
  const API_KEY = "37218c5cdaa1cb5207108e1fd5bdc5a0";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        ` https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        });
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="home-popularity-page">
      {movies.map((movie) => {
        return (
          <div
            className="pop-movie-card"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
            }}
          >
            {/* <h5 className="movie-title">{movie.original_title}</h5> */}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
