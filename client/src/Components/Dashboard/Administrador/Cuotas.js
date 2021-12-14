import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header, Segment, Dropdown } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";

function Cuotas() {
  const [formData, setFormData] = useState({
    cursoValue: null,
    alumnosValue: "",
    cursos: [],
  });

  const { alumnosValue, cursoValue, cursos } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cursos`)
      .then((res) => {
        setFormData({
          ...formData,
          cursos: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChangle = (text) => (e, data) => {
    setFormData({ ...formData, [text]: data.value });
  };

  const cursosOptions = cursos.map((x) => ({
    key: x._id,
    text: x.titulo,
    value: x._id,
  }));

  const alumnosOptions = cursoValue
    ? cursos
        .find((x) => x._id === cursoValue)
        .alumnos.map((x) => ({
          key: x,
          text: x,
          value: x,
        }))
    : [];

  return (
    <div>
      <ToastContainer />
      <Segment>
        <Header as="h1" dividing>
          Cuotas
        </Header>
        <Container style={{ minHeight: "30vh" }}>
          <Dropdown
            placeholder="Selecciona un curso"
            fluid
            selection
            options={cursosOptions}
            value={cursoValue}
            onChange={handleChangle("cursoValue")}
          />
          <Dropdown
            placeholder="Selecciona un alumno"
            fluid
            selection
            options={alumnosOptions}
            value={alumnosValue}
            onChange={handleChangle("alumnosValue")}
          />
        </Container>
      </Segment>
    </div>
  );
}

export default Cuotas;
