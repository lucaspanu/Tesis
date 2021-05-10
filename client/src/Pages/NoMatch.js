import React from "react";
import Error404 from "../Components/Error404/Error404";
import ResponsibeContainer from "../Components/NavBar/ResponsibeContainer";

// Paguina 404 - Muestra cuando una paguina no existe

function NoMatch() {
  return (
    <div>
      {/* <ResponsibeContainer /> */}
      <Error404 />
    </div>
  );
}

export default NoMatch;
