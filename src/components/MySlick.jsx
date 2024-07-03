import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Component } from "react";
import { Image, Spinner } from "react-bootstrap";

class MySlick extends Component {
  state = {
    movies: [],
    isLoading: true,
  };
  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  fetchFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=30d34795&s=" + this.props.film)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Dati non ricevuti");
        }
      })
      .then((response) => {
        this.setState({ movies: response.Search, isLoading: false });
        // console.log("Film della fetch", response.Search);
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchFilm();
  }

  render() {
    return (
      <>
        <h1 className="mt-3">{this.props.titolo}</h1>
        {this.state.isLoading && <Spinner animation="grow" />}
        <div className="slider-container">
          <Slider {...this.settings}>
            {this.state.movies.map((film, index) => (
              <div key={index}>{<Image className="img-fluid px-2" src={film.Poster} alt="Copertina" />}</div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
export default MySlick;
