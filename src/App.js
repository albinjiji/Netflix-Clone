import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import {
  originals,
  actions,
  romance,
  comedy,
  horror,
  documentaries,
  trending,
} from "./urls";
import Navbar from "./Components/Navbar/Navbar";
import Rowpost from "./Components/RowPost/Rowpost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost title="Netflix Originals" url={originals} />
      <Rowpost title="Action" isSmall url={actions} />
      <Rowpost title="Romance" isSmall url={romance} />
      <Rowpost title="Trending" isSmall url={trending} />
      <Rowpost title="Comedy" isSmall url={comedy} />
      <Rowpost title="Horror" isSmall url={horror} />
      <Rowpost title="Documentaries" isSmall url={documentaries} />
    </div>
  );
}

export default App;
