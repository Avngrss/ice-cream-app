import React from "react";
import Header from "../Header/Header";
import CafeCard from "../CafeCard/CafeCard";
import IceCard from "../IceCard/IceCard";

function App() {
  return (
    <div className="container">
      <Header />
      <IceCard />
      <CafeCard />
    </div>
  );
}

export default App;
