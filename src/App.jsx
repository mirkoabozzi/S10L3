import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";
import MySettings from "./components/MySettings";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/moviedetails/:movieId" element={<MovieDetails />} />
          <Route path="/my-settings" element={<MySettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
