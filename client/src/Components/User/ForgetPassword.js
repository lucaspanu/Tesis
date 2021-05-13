import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { authenticate, isAuth } from "../../helpers/auth";
import axios from "axios";
import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";

const ForgetPassword = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setFormData({ ...formData });
      axios
        .put(`${process.env.REACT_APP_API_URL}/password/forget`, {
          email,
        })
        .then((res) => {
          setFormData({
            ...formData,
            email: "",
          });
          toast.success(`Por favor revisa tu correo`);
        })
        .catch((err) => {
          console.log(err.response);
          toast.error(err.response.data.error);
        });
    } else {
      toast.error("Ingresa un email valido");
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
            Recuperar contraseña
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

              <Button color="teal" fluid size="large">
                Enviar
              </Button>
            </Segment>
          </Form>
          <Divider hidden />
          <Button as={Link} to="/login" animated floated="left">
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

export default ForgetPassword;
