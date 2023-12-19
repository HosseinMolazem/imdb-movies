const MovieCard = ({ movie: { id, title, poster, year, genres } }) => {
  return (
    <div className="movie" key={id}>
      <div>
        <p>{year}</p>
      </div>

      <div>
        <img
          src={poster !== "N/A" ? poster : "https://via.placeholder.com/400"}
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
