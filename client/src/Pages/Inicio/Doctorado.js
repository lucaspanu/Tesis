import React from "react";
import Footer from "../../Components/Footer/Footer";
import ResponsibeContainer from "../../Components/NavBar/ResponsibeContainer";
import DoctoradoBody from "../../Components/Doctorado/DoctoradoBody";

function Doctorado() {
  return (
    <ResponsibeContainer>
      <DoctoradoBody />
      <Footer />
    </ResponsibeContainer>
  );
}

export default Doctorado;
