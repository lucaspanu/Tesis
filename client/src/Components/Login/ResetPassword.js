import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { isAuth } from "../../helpers/auth";
import axios from "axios";
import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";

const ResetPassword = ({ match }) => {
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
    token: "",
  });
  const { password1, password2, token } = formData;

  useEffect(() => {
    let token = match.params.token;
    if (token) {
      setFormData({ ...formData, token });
    }
  }, []);
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log(password1, password2);
    e.preventDefault();
    if (password1 === password2 && password1 && password2) {
      setFormData({ ...formData });
      axios
        .put(`${process.env.REACT_APP_API_URL}/password/reset`, {
          newPassword: password1,
          resetPasswordLink: token,
        })
        .then((res) => {
          console.log(res.data.message);
          setFormData({
            ...formData,
            password1: "",
            password2: "",
          });
          toast.success(res.data.message);
        })
        .catch((err) => {
          toast.error("Ocurrio un Error");
        });
    } else {
      toast.error("Las contraseñas no son iguales");
    }
  };
  return (
    <>
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
              Nueva contraseña
            </Header>
            <Form size="large" onSubmit={handleSubmit}>
              <Segment stacked>
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
    </>
  );
};

export default ResetPassword;
