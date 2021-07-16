import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({id, title, year, summary, poster}) {
 return (
  <div class="movie__data">
    <Link 
     to={{
      pathname: 'movie-detail',
      state: {year, title, summary, poster},
     }}
    >
   <h3 class="movie__title">{title}</h3>
   <h3 class="movie__year">{year}</h3>
   <h3 class="movie__summary">{summary}</h3>
   </Link>
  </div>
 )
}

Movie.propTypes = {
 id: PropTypes.number.isRequired,
 title: PropTypes.string.isRequired,
 summary: PropTypes.string.isRequired,
 poster: PropTypes.string.isRequired,
};

export default Movie;