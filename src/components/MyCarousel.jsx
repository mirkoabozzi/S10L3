import { useEffect, useState } from "react";
import { Carousel, Col, Image, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyCarousel = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const fetchFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=30d34795&s=" + props.film)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Dati non ricevuti");
        }
      })
      .then((response) => {
        setMovies(response.Search);
        setIsLoading(false);
        console.log("Film della fetch", response.Search);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchFilm();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies.length < 0]);

  return (
    <>
      <h1 className="mt-3">{props.titolo}</h1>
      {isLoading && <Spinner animation="grow" />}
      <Carousel>
        <Carousel.Item interval={2000}>
          <Row className="g-2">
            {movies.slice(0, 6).map((film, index) => (
              <Col sm="2" key={index}>
                {<Image className="img-fluid" src={film.Poster} alt="Copertina" onClick={() => navigate("/moviedetails/" + film.imdbID)} />}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Row className="g-2">
            {movies.slice(0, 6).map((film, index) => (
              <Col sm="2" key={index}>
                {<Image className="img-fluid" src={film.Poster} alt="Copertina" onClick={() => navigate("/moviedetails/" + film.imdbID)} />}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Row className="g-2">
            {movies.slice(0, 6).map((film, index) => (
              <Col sm="2" key={index}>
                {<Image className="img-fluid" src={film.Poster} alt="Copertina" onClick={() => navigate("/moviedetails/" + film.imdbID)} />}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default MyCarousel;
