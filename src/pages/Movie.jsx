import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>Time: {movie.time} minutes</p>
        <div>
          Genres:
          {movie.genres.map((genre, index) => (
            <span key={index} style={{ marginRight: "10px" }}>
              {genre}
            </span>
          ))}
        </div>

      </main>
    </>
  );
};

export default Movie;
