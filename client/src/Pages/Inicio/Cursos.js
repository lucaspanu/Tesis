import React from "react";
import Footer from "../../Components/Footer/Footer";
import ResponsibeContainer from "../../Components/NavBar/ResponsibeContainer";
import CursosList from "../../Components/CursosYDiplomaturas/CursosList";

function Cursos() {
  return (
    <ResponsibeContainer>
      <CursosList />
      <Footer />
    </ResponsibeContainer>
  );
}

export default Cursos;
