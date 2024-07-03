import MyCarousel from "./MyCarousel";
import { Container } from "react-bootstrap";

const TvShows = () => {
  return (
    <Container>
      <MyCarousel titolo="Trending Now" film="narcos" />;
      <MyCarousel titolo="Watch Again" film="harry potter" />
      <MyCarousel titolo="New Release" film="lupin" />
    </Container>
  );
};
export default TvShows;
