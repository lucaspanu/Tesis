import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Item,
  Modal,
  Label,
  Segment,
  Divider,
  Form,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";

function Modales({ curso }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button circular primary icon="eye" />}
    >
      <Modal.Header>{curso.titulo}</Modal.Header>

      <Modal.Content image>
        <Image
          size="medium"
          src={
            curso.imagen ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          wrapped
        />
        <Modal.Description>
          <Header>Descripcion</Header>
          {curso.descripcion}
          {curso.profesor ? (
            <>
              <Header>Profesor: </Header>
              <Icon name="user circle" />
              {curso.profesor}
            </>
          ) : null}
          {curso.carga_horaria ? (
            <>
              <Header>Carga Horaria: </Header>
              {curso.carga_horaria}
            </>
          ) : null}
          {curso.cupos ? (
            <>
              <Header>Cupos: </Header>
              {curso.cupos}
            </>
          ) : null}
          {curso.costo ? (
            <>
              <Header>Costo: </Header>
              {curso.costo}
            </>
          ) : null}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={() => setOpen(false)}>
          Volver
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

function Confirm({ curso }) {
  const [open, setOpen] = React.useState(false);

  //evento Borrar
  const handleBorrar = (text) => (e) => {
    setOpen(false);
    console.log(text);
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/cursos/${text}`)
      .then((res) => {
        toast.success("Curso eliminado exitosamente");
        setTimeout(function () {
          window.location.href = "/admin/cursos";
        }, 2500);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={<Button circular negative icon="trash" />}
    >
      <Header icon>
        <Icon name="delete" />
        Eliminar el curso: {curso.titulo}
      </Header>
      <Modal.Content>
        <p>
          Esta seguro que desea eliminar este curso ? No podra recuperarlo una
          vez eliminado
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> Volver
        </Button>
        <Button color="red" inverted onClick={handleBorrar(curso._id)}>
          <Icon name="checkmark" /> Eliminar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

function EditCurso({ curso }) {
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    titulo: curso.titulo,
    descripcion: curso.descripcion,
    fecha: curso.fecha,
    costo: curso.costo,
    carga_horaria: curso.carga_horaria,
    profesor: curso.profesor,
    cupos: curso.cupos,
    imagen: curso.imagen,
  });

  const {
    titulo,
    descripcion,
    fecha,
    costo,
    carga_horaria,
    profesor,
    cupos,
    imagen,
  } = formData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //evento Edit
  const handleEdit = (text) => (e) => {
    setOpen(false);
    console.log(text);
    e.preventDefault();
    setFormData({ ...formData });
    axios
      .put(`${process.env.REACT_APP_API_URL}/curso/edit/${text}`, {
        titulo,
        descripcion,
        fecha,
        costo,
        carga_horaria,
        profesor,
        cupos,
        imagen,
      })
      .then((res) => {
        toast.success("Curso editado exitosamente");
        setTimeout(function () {
          window.location.href = "/admin/cursos";
        }, 2500);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button circular positive icon="edit" />}
    >
      <Modal.Header>{titulo}</Modal.Header>

      <Modal.Content>
        <Form>
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
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary onClick={() => setOpen(false)}>
          Volver
        </Button>
        <Button positive onClick={handleEdit(curso._id)}>
          Editar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

function CursosAdmin() {
  const [formData, setFormData] = useState({
    cursos: [],
  });

  const { cursos } = formData;

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
        toast.error(`Error To Your Information ${err.response.statusText}`);
      });
  };

  return (
    <div>
      <ToastContainer />
      <Segment>
        <Header as="h2">
          <Link to="/admin/cursos/nuevo">
            <Button floated="right" animated="vertical" positive>
              <Button.Content hidden>Agregar</Button.Content>
              <Button.Content visible>
                <Icon name="add" />
              </Button.Content>
            </Button>
          </Link>
          Administrar Cursos
        </Header>
        <Divider />
        <Container>
          <Item.Group divided>
            {cursos.map((curso) => (
              <>
                <Item>
                  <Item.Image
                    src={
                      curso.imagen ||
                      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                    }
                  />
                  <Item.Content>
                    <Item.Header as="a">{curso.titulo}</Item.Header>
                    <Item.Meta>
                      <span>{curso.fecha}</span>
                    </Item.Meta>
                    <Item.Description>{curso.descripcion}</Item.Description>
                    <Item.Extra>
                      <Button.Group floated="right">
                        <Modales curso={curso} />
                        <EditCurso curso={curso} />
                        <Confirm curso={curso} />
                      </Button.Group>
                      {curso.profesor ? (
                        <>
                          <Icon name="user circle" />
                          {curso.profesor}
                        </>
                      ) : null}

                      {curso.costo ? (
                        <>
                          {" "}
                          <br />
                          <Label>{curso.costo}</Label>
                        </>
                      ) : null}
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </>
            ))}
          </Item.Group>
        </Container>
      </Segment>
    </div>
  );
}

export default CursosAdmin;
