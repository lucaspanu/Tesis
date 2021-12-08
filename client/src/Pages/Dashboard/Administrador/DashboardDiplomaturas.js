import React from "react";
import CursosAdmin from "../../../Components/Dashboard/Administrador/CursosAdmin";
import NavContainer from "../../../Components/Dashboard/NavBar/NavContainer";

function DashboardCursosAdmin() {
  return (
    <NavContainer>
      <CursosAdmin diplomaturas />
    </NavContainer>
  );
}

export default DashboardCursosAdmin;
