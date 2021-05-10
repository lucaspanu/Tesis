import React from "react";
import DiplomaturasList from "../../Components/CursosYDiplomaturas/DiplomaturasList";
import Footer from "../../Components/Footer/Footer";
import ResponsibeContainer from "../../Components/NavBar/ResponsibeContainer";

function Diplomaturas() {
  return (
    <ResponsibeContainer>
      <DiplomaturasList />
      <Footer />
    </ResponsibeContainer>
  );
}

export default Diplomaturas;
