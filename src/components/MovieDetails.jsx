import { useEffect, useState } from "react";
import { Badge, Col, Container, Image, ListGroup, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const params = useParams();
  const movieId = params.movieId;

  //   console.log("comments", comments);

  const fetchMoviesDetails = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=30d34795&i=" + movieId);
      if (response.ok) {
        setMovie(await response.json());
      } else {
        throw new Error("Errore nel reperimento del Film");
      }
    } catch (error) {
      console.console.log(error);
    }
  };
  const fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + movieId, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk3OTdjMjM5YzAwMTUyZjRiM2IiLCJpYXQiOjE3MTk0ODcxNTcsImV4cCI6MTcyMDY5Njc1N30.cnWiTJ8Skk8km6KUyP5pIXFi42u-vAP3LJVqlx_JKd8",
        },
      });
      if (response.ok) {
        const result = await response.json();
        setComments(result);
      } else {
        throw new Error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMoviesDetails();
    fetchComments();
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
          <Row className="mt-4">
            <Col>
              <ListGroup>
                {comments.map((commento) => {
                  return (
                    <ListGroup.Item key={commento._id} title={commento.author}>
                      <Row className="justify-content-between">
                        <Col sm={8} md={6}>
                          <h5>{commento.author}</h5>
                          <p>{commento.comment}</p>
                        </Col>
                        <Col sm={3}>
                          <Badge className="m-2">{commento.rate}</Badge>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
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
