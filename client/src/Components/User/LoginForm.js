import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { authenticate, isAuth } from "../../helpers/auth";
import axios from "axios";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";

const LoginForm = ({ history }) => {
  //handle changes por imputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //Submit data to the backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setFormData({ ...formData });
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/login`, {
          email,
          password: password,
        })
        .then((res) => {
          authenticate(res, () => {
            setFormData({
              ...formData,
              email: "",
              password: "",
            });
            toast.success(`Hey ${res.data.displayName}, Welcome back!`);
            isAuth() && isAuth().role === "admin"
              ? history.push("/admin")
              : history.push("/private");
          });
        })
        .catch((err) => {
          if (err.response == null)
            return toast.error("No se pudo conectar a la base de datos");

          if (err.response.status == 401)
            return toast.error("Correo o contraseña incorrectos");

          console.log(err.response);
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("Por favor llenar todos los campos");
    }
  };

  return (
    <div>
      {/* Si esta logeado que lo redirija */}
      {/* {isAuth() && isAuth().role === "admin" ? <Redirect to="/admin" /> : null} */}
      {isAuth() ? <Redirect to="/" /> : null}
      <ToastContainer />
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            INICIAR SESIÓN
          </Header>
          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                value={email}
                iconPosition="left"
                type="email"
                label="E-mail"
                placeholder="E-mail address"
                onChange={handleChange("email")}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                value={password}
                type="password"
                label="Contraseña"
                onChange={handleChange("password")}
              />

              <Button color="teal" fluid size="large">
                Ingresar
              </Button>
            </Segment>
          </Form>
          <Message>
            No tienes una cuenta ? <Link to="/registrarse">Registrarse</Link>
          </Message>
          <Button as={Link} to="/" animated floated="left">
            <Button.Content visible>Volver</Button.Content>
            <Button.Content floated="left" hidden>
              <Icon name="left chevron" />
            </Button.Content>
          </Button>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginForm;
