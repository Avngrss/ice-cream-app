import React from "react";
import Header from "../Header/Header";
import Product from "../Product/Product";
import BuyModal from "../BuyModal/BuyModal";
import MadeSec from "../MadeSec/MadeSec";
import MadeModal from "../MadeModal/MadeModal";
import Revius from "../Reavius/Revius";
import AdressCard from "../AdressCard/AdressCard";
import BtnBlock from "../BtnBlock/BtnBlock";
import Footer from "../Footer/Footer";
import LocationModal from "../LocationModal/LocationModal";
import InterestModal from "../InterestModal/InterestModal";

const adress = [
  { label: "CAFE", city: "Chicago", adress: "10340 Ridgeland Ave, Chicago Ridge, IL 60415, USA" },
  { label: "FOOD TRUCK", city: "Los Angeles", adress: "1003 Manhattan Ave, Manhattan Beach, CA 90263, USA" },
  { label: "CAFE", city: "New York", adress: "726 Sterling Pl,Sterling Brooklyn, NY 11222, USA" },
];

function App() {
  const [modalOpened, setModalOpened] = React.useState(false);
  const [modalMadeOpened, setmodalMadeOpened] = React.useState(false);
  const [modalLocation, setModalLocation] = React.useState(false);
  const [modalInteresting, setmodalInteresting] = React.useState(false);

  return (
    <div className="container">
      {modalOpened ? <BuyModal onclickCloseModal={() => setModalOpened(false)} /> : null}
      {modalMadeOpened ? <MadeModal onclickCloseModal={() => setmodalMadeOpened(false)} /> : null}
      {modalLocation ? <LocationModal onclickCloseModal={() => setModalLocation(false)} /> : null}
      <Header onClickModal={() => setModalOpened(true)} />
      <main>
        <Product />
        <MadeSec onClickOpenModalMade={() => setmodalMadeOpened(true)} />
        <Revius />
        <div className="adress">
          {adress.map((adr) => (
            <AdressCard label={adr.label} city={adr.city} adress={adr.adress} />
          ))}
        </div>
        {modalInteresting ? <InterestModal onclickCloseModal={() => setmodalInteresting(false)} /> : null}
        <BtnBlock onClickLocation={() => setModalLocation(true)} onClickInteresting={() => setmodalInteresting(true)} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
