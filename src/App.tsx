import React from 'react';
import './App.css';
import ChampionCard from './component/card/ChampionCard';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ChampionCard />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
