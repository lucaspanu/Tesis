import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { authenticate, isAuth } from "../../helpers/auth";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";

const RegisterForm = ({ history }) => {
  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { username, displayName, email, password1, password2 } = formData;
  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //submit data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && displayName && email && password1) {
      if (password1 === password2) {
        setFormData({ ...formData });
        axios
          .post(`${process.env.REACT_APP_API_URL}/user/register`, {
            username,
            displayName,
            email,
            password: password1,
          })
          .then((res) => {
            authenticate(res, () => {
              setFormData({
                ...formData,
                username: "",
                displayName: "",
                email: "",
                password1: "",
                password2: "",
              });
            });
            toast.success(res.data.message);
            isAuth() && isAuth().role === "admin"
              ? history.push("/admin")
              : history.push("/private");
          })
          .catch((err) => {
            setFormData({
              ...formData,
              username: "",
              displayName: "",
              email: "",
              password1: "",
              password2: "",
            });

            console.log(err.response);
            toast.error(err.response.data.errors);
            toast.error(err.response.data.errors.Password[0]);
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
      {/* Si esta logeado que lo redirija */}
      {isAuth() ? <Redirect to="/private" /> : null}
      <ToastContainer />
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            REGISTRARSE
          </Header>
          <Form onSubmit={handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                label="Usuario"
                onChange={handleChange("username")}
                value={username}
              />
              <Form.Input
                fluid
                icon="user outline"
                iconPosition="left"
                label="Nombre"
                onChange={handleChange("displayName")}
                value={displayName}
              />
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

              <Button color="teal" fluid size="large">
                Enviar
              </Button>
            </Segment>
          </Form>
          <Message>
            Ya tienes una cuenta ? <Link to="/login">Iniciar Sesion</Link>
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

export default RegisterForm;
