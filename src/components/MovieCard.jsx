import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to ={'/movie/${id}'}>View Details</Link>
        {/* What should go here? */}
    </article>
  );
};

export default MovieCard;