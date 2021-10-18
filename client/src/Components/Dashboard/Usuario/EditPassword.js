import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  Icon,
  Label,
  Header,
  Image,
  Form,
  Input,
} from "semantic-ui-react";
import EditImagen from "../../../Assets/Image/EditPassword.svg";
import { getCookie, isAuth, updateUser } from "../../../helpers/auth";

function EditPassword() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    password1: "",
    password: "",
  });

  const { password1, password } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleVolver = () => {
    setOpen(false);
    setFormData({
      ...formData,
      password1: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    const token = getCookie("token");
    console.log(token);
    if (password1 === password) {
      setFormData({ ...formData });
      axios
        .put(
          `${process.env.REACT_APP_API_URL}/user/update`,
          {
            password: password1,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setOpen(false);
          updateUser(res, () => {
            toast.success("Cambio de contraseña, Exitoso");
            setFormData({ ...formData, textChange: "Update" });
          });
        })
        .catch((err) => {
          toast.error("Ingrese un minimo de 6 caracteres");
          console.log(err.response);
        });
    } else {
      toast.error("Las contraseñas no son iguales");
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      size="small"
      open={open}
      trigger={
        <Button as="div" labelPosition="right">
          <Button icon>
            <Icon name="cog" />
          </Button>
          <Label as="a" basic>
            Cambiar contrasena
          </Label>
        </Button>
      }
    >
      <Modal.Header>Edita tu contrasena</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={EditImagen} wrapped />
        <Modal.Description>
          <Form>
            <Header>Contrasena:</Header>
            <Form.Field
              type="password"
              placeholder="Password"
              control={Input}
              onChange={handleChange("password1")}
              value={password1}
            />

            <Form.Field
              label="Repite la contrasena:"
              placeholder="Password"
              type="password"
              control={Input}
              onChange={handleChange("password")}
              value={password}
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => handleVolver()}>
          Volver
        </Button>
        <Button
          content="Confirmar"
          labelPosition="right"
          icon="checkmark"
          onClick={() => handleSubmit()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default EditPassword;
