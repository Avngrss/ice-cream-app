import React from "react";
import Header from "../Header/Header";
import Product from "../Product/Product";
import BuyModal from "../BuyModal/BuyModal";

function App() {
  const [modalOpened, setModalOpened] = React.useState(false);
  return (
    <div className="container">
      {modalOpened ? <BuyModal onclickCloseModal={() => setModalOpened(false)} /> : null}
      <Header onClickModal={() => setModalOpened(true)} />
      <main>
        <Product />
      </main>
    </div>
  );
}

export default App;
