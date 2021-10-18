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
import EditImagen from "../../../Assets/Image/EditProfile.svg";
import { getCookie, isAuth, updateUser } from "../../../helpers/auth";

function EditPerfil() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    const token = getCookie("token");
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const { name, email } = res.data;
        setFormData({ ...formData, name, email });
      })
      .catch((err) => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
      });
  };

  const { name, email } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleVolver = () => {
    setOpen(false);
    setFormData({
      ...formData,
      name: name,
    });
  };

  const handleSubmit = () => {
    setOpen(false);
    const token = getCookie("token");
    setFormData({ ...formData });
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/user/update`,
        {
          name,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        updateUser(res, () => {
          toast.success("Perfil editado exitosamente");
          setFormData({ ...formData });
          setTimeout(function () {
            window.location.href = "/perfil";
          }, 3000);
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      size="small"
      open={open}
      trigger={
        <Button as="div" labelPosition="right" style={{ marginBottom: "2px" }}>
          <Button icon>
            <Icon name="pencil" />
          </Button>
          <Label as="a" basic>
            Editar
          </Label>
        </Button>
      }
    >
      <Modal.Header>Edita tu Usuario</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={EditImagen} wrapped />
        <Modal.Description>
          <Form>
            <Header>Nombre:</Header>
            <Form.Field
              inline
              placeholder="Nombre"
              control={Input}
              onChange={handleChange("name")}
              value={name}
            />

            <Header>Correo:</Header>
            <Form.Field
              disabled
              control={Input}
              onChange={handleChange("email")}
              value={email}
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

export default EditPerfil;
