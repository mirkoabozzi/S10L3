import { useEffect, useState } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const movieId = params.movieId;
  const navigate = useNavigate();

  const fetchMoviesDetails = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=30d34795&i=" + movieId);
      if (response.ok) {
        setMovie(await response.json());
      } else {
        throw new Error("Errore nel reperimento dei dati");
      }
    } catch (error) {
      console.console.log(error);
    }
  };

  useEffect(() => {
    fetchMoviesDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <Container>
      {movie ? (
        <>
          <Row>
            <Col>
              <Image src={movie.Poster} />
            </Col>
            <Col>
              <h1>{movie.Title}</h1>
              <p> Attori - {movie.Actors}</p>
              <p> Anno - {movie.Year}</p>
            </Col>
          </Row>
        </>
      ) : (
        <Spinner animation="grow" role="status" variant="info">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
};
export default MovieDetails;
