import React from "react";
import Header from "../Header/Header";
import Product from "../Product/Product";
import BuyModal from "../BuyModal/BuyModal";
import MadeSec from "../MadeSec/MadeSec";
import MadeModal from "../MadeModal/MadeModal";
import Revius from "../Reavius/Revius";

function App() {
  const [modalOpened, setModalOpened] = React.useState(false);
  const [modalMadeOpened, setmodalMadeOpened] = React.useState(false);
  return (
    <div className="container">
      {modalOpened ? <BuyModal onclickCloseModal={() => setModalOpened(false)} /> : null}
      {modalMadeOpened ? <MadeModal onclickCloseModal={() => setmodalMadeOpened(false)} /> : null}
      <Header onClickModal={() => setModalOpened(true)} />
      <main>
        <Product />
        <MadeSec onClickOpenModalMade={() => setmodalMadeOpened(true)} />
        <Revius />
      </main>
    </div>
  );
}

export default App;
