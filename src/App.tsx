import React from "react";
import "./App.css";
import CardContainer from "./component/card/CardContainer";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
