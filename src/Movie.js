import PropTypes from 'prop-types';

function Movie({id, title, year, summary, poster}) {
 return (
  <div class="movie__data">
   <h3 class="movie__title">{title}</h3>
   <h3 class="movie__year">{year}</h3>
   <h3 class="movie__summary">{summary}</h3>
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