import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />

          {/* <MySettings /> */}
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
