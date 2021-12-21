import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { isAuth } from "../../../helpers/auth";
import { Redirect } from "react-router-dom";
import FileBase from "react-file-base64";

function AddCursos({ diplomatura }) {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    costo: "",
    carga_horaria: "",
    tipo_curso: diplomatura ? "diplomatura" : "curso",
    profesores: [],
    alumnos: [],
    nro_cuotas: "",
    imagen: "",
    users: [],
  });

  const {
    titulo,
    descripcion,
    fecha,
    nro_cuotas,
    costo,
    carga_horaria,
    tipo_curso,
    profesores,
    alumnos,
    imagen,
    users,
  } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/users`)
      .then((res) => {
        setFormData({
          ...formData,
          users: res.data,
        });
      })
      .catch((err) => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
      });
  };

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleProfesoresChange = (text) => (e, data) => {
    setFormData({ ...formData, [text]: data.value });
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
          nro_cuotas,
          costo,
          carga_horaria,
          tipo_curso,
          profesores,
          alumnos,
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
            profesores: [],
            nro_cuotas: "",
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
            profesores: [],
            nro_cuotas: "",
            imagen: "",
          });
          console.log(err.response);
          toast.error("Error tamaño de imagen muy grande");
        });
    } else {
      toast.error("Por favor agrega un titulo y una descripcion");
    }
  };

  const options = users
    .filter((x) => x.role === "Profesor")
    .map((x) => ({
      key: x._id,
      text: x.name,
      value: x._id,
    }));

  const title = diplomatura ? " AGREGAR DIPLOMATURA" : " AGREGAR CURSO";

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
            {title}
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
                <Form.Dropdown
                  fluid
                  multiple
                  search
                  selection
                  label="Profesores"
                  onChange={handleProfesoresChange("profesores")}
                  value={profesores}
                  options={options}
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
                  icon="usd"
                  iconPosition="left"
                  type="number"
                  label="Costo"
                  onChange={handleChange("costo")}
                  value={costo}
                />

                <Form.Input
                  fluid
                  type="number"
                  label="Numero de Cuotas"
                  onChange={handleChange("nro_cuotas")}
                  value={nro_cuotas}
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
