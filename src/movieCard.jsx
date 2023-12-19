import images from './assets/icon-image-not-found-free-vector.jpg'
const MovieCard = ({ movie: { id, title, poster, year, genres } }) => {
  return (
    <div className="movie" key={id}>
      <div>
        <p>{year}</p>
      </div>

      <div>
        <img
          src={poster}
          alt={title}
        />
      </div>

      <div>
        {genres && <span>{genres[0]}</span>}
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
