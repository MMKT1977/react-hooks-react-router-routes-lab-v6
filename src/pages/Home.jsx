import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);


  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>

      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        <div className="movie-list">
          
        {movies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} />
          ))}

        </div>
      </main>
    </>
  );
};

export default Home;
