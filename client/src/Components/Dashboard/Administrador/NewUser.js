import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { isAuth } from "../../../helpers/auth";
import { Redirect } from "react-router-dom";

const options = [
  { key: "u", text: "Usuario", value: "Usuario" },
  { key: "a", text: "Administrador", value: "admin" },
  { key: "p", text: "Profesor", value: "Profesor" },
];

function NewUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
    role: "Usuario",
  });

  const { name, email, password1, password2, role } = formData;
  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleRoleChange = (text) => (e, data) => {
    setFormData({ ...formData, role: data.value });
  };

  //submit data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password1) {
      if (password1 === password2) {
        setFormData({ ...formData });
        axios
          .post(`${process.env.REACT_APP_API_URL}/admin/new`, {
            name,
            email,
            password: password1,
            role,
          })
          .then((res) => {
            setFormData({
              ...formData,
              name: "",
              email: "",
              password1: "",
              password2: "",
              role: "",
            });

            toast.success(res.data.message);
          })
          .catch((err) => {
            setFormData({
              ...formData,
              name: "",
              email: "",
              password1: "",
              password2: "",
              role: "",
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });
      } else {
        toast.error("Las contraseñas no son iguales");
      }
    } else {
      toast.error("Rellena todo los campos");
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
            Nuevo Usuario
          </Header>
          <Form onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="mail"
                type="email"
                iconPosition="left"
                label="Email"
                onChange={handleChange("email")}
                value={email}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                label="Nombre"
                onChange={handleChange("name")}
                value={name}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                type="password"
                label="Contraseña"
                onChange={handleChange("password1")}
                value={password1}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                type="password"
                label="Repetir Contraseña"
                onChange={handleChange("password2")}
                value={password2}
              />
              <Form.Select
                fluid
                label="Rol"
                placeholder="Usuario"
                options={options}
                onChange={handleRoleChange("role")}
                value={role}
              />
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

export default NewUser;
