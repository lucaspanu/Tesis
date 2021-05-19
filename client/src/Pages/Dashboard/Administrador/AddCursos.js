import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { isAuth } from "../../../helpers/auth";
import { Redirect } from "react-router-dom";
import FileBase from "react-file-base64";

function AddCursos() {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    costo: "",
    carga_horaria: "",
    profesor: "",
    cupos: "",
    imagen: "",
  });

  const {
    titulo,
    descripcion,
    fecha,
    cupos,
    costo,
    carga_horaria,
    profesor,
    imagen,
  } = formData;
  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //submit data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo && descripcion) {
      setFormData({ ...formData });
      axios
        .post(`${process.env.REACT_APP_API_URL}/cursos`, {
          titulo,
          descripcion,
          fecha,
          cupos,
          costo,
          carga_horaria,
          profesor,
          imagen,
        })
        .then((res) => {
          setFormData({
            ...formData,
            titulo: "",
            descripcion: "",
            fecha: "",
            costo: "",
            carga_horaria: "",
            profesor: "",
            cupos: "",
            imagen: "",
          });

          toast.success(res.data.message);
        })
        .catch((err) => {
          setFormData({
            ...formData,
            titulo: "",
            descripcion: "",
            fecha: "",
            costo: "",
            carga_horaria: "",
            profesor: "",
            cupos: "",
            imagen: "",
          });
          console.log(err.response);
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("Por favor agrega un titulo y una descripcion");
    }
  };
  return (
    <div>
      {isAuth().role === "admin" ? null : <Redirect to="/private" />}
      <ToastContainer />
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 680 }}>
          <Header as="h2" color="teal" textAlign="center">
            AGREGAR CURSOS
          </Header>
          <Form onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                type="text"
                label="Titulo"
                onChange={handleChange("titulo")}
                value={titulo}
              />
              <Form.TextArea
                label="Descripcion"
                placeholder="Descripcion del curso..."
                onChange={handleChange("descripcion")}
                value={descripcion}
              />
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  type="date"
                  label="Fecha de Inicio"
                  onChange={handleChange("fecha")}
                  value={fecha}
                />
                <Form.Input
                  fluid
                  icon="usd"
                  iconPosition="left"
                  type="number"
                  label="Costo"
                  onChange={handleChange("costo")}
                  value={costo}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  type="number"
                  label="Carga Horaria"
                  onChange={handleChange("carga_horaria")}
                  value={carga_horaria}
                />
                <Form.Input
                  fluid
                  type="text"
                  label="Cupos"
                  onChange={handleChange("cupos")}
                  value={cupos}
                />
                <Form.Input
                  fluid
                  type="text"
                  label="Profesor acargo"
                  onChange={handleChange("profesor")}
                  value={profesor}
                />
              </Form.Group>
              <Form.Input fluid label="Imagen">
                <FileBase
                  type="file"
                  multiple={false}
                  value={imagen}
                  onDone={({ base64 }) =>
                    setFormData({ ...formData, imagen: base64 })
                  }
                />
              </Form.Input>

              <Button color="teal" fluid size="large">
                Agregar
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default AddCursos;
