import React from 'react'

const MovieCard = ({movie: {title, vote_average, poster_path, original_language }}) => {
  return (
    <div className="movie-card">
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} />
        // <p className="text-white">{title}</p>
    </div>
  )
}

export default MovieCard