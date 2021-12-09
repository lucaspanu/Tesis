import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Header, Divider, Segment } from "semantic-ui-react";
import InscripcionesTable from "../../../Components/Dashboard/Administrador/InscripcionesTable";
import NavContainer from "../../../Components/Dashboard/NavBar/NavContainer";

function DashboardInscripciones() {
  return (
    <NavContainer>
      <ToastContainer />
      <Segment basic>
        <Header as="h2">Solicitudes de Inscripcion</Header>
        <Divider />
        <InscripcionesTable />
      </Segment>
    </NavContainer>
  );
}

export default DashboardInscripciones;
