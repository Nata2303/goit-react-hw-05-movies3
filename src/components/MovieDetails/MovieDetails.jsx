import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet, Link } from 'react-router-dom';
import Api from '../../Api';
import css from './movieDetails.module.css';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await Api.getMovieDetails(movieId);
      setMovieDetails(data);
    };

    fetchMovieDetails();
  }, [movieId]);

useEffect(() => {
  localStorage.setItem('fromLocation', location.state?.from);
}, [location.state?.from]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, vote_average, overview, genres } = movieDetails;
  const userScorePercentage = (vote_average * 10).toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const fromLocation = localStorage.getItem('fromLocation');

  const handleGoBack = () => {
    if (fromLocation === 'movies') {
      navigate('/movies');
    } else {
      navigate('/home');
    }
  };

  return (
    <div>
      <div className={css.cardfilm}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          width="250"
        />
        <div className={css.details}>
          <h1>{title}</h1>
          <p className={css.userscore}>User Score: {userScorePercentage}%</p>
          <p className={css.overview}>Overview: {overview}</p>
          <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
          <button className={css.goBackButton} onClick={handleGoBack}>
            Go back
          </button>
        </div>
      </div>
      <Link to={`/movies/${movieId}/cast`} className={css.link}>
        Cast
      </Link>
      <Link to={`/movies/${movieId}/reviews`} className={css.link}>
        Reviews
      </Link>
      {/* Outlet для дочірніх маршрутів Cast та Reviews */}
      <Outlet />

    </div>
  );
};

export default MovieDetails;
