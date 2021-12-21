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
import NoFound from "../../NoFound/NoFound";

function VerCurso({ curso, users }) {
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
          {curso.profesores
            ? curso.profesores.map((profesor) => (
                <>
                  <Header>Profesor: </Header>
                  <Icon name="user circle" />
                  {users.find((x) => x._id === profesor).name}
                </>
              ))
            : null}
          {curso.carga_horaria ? (
            <>
              <Header>Carga Horaria: </Header>
              {curso.carga_horaria}
            </>
          ) : null}
          {curso.nro_cuotas ? (
            <>
              <Header>Numero Cuotas: </Header>
              {curso.nro_cuotas}
            </>
          ) : null}
          {curso.costo ? (
            <>
              <Header>Costo: </Header>
              {`$ ${curso.costo}`}
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

function DeleteCurso({ curso }) {
  const [open, setOpen] = React.useState(false);

  //evento Borrar
  const handleBorrar = (text) => (e) => {
    setOpen(false);
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

function EditCurso({ curso, users, diplomaturas }) {
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    titulo: curso.titulo,
    descripcion: curso.descripcion,
    fecha: curso.fecha,
    costo: curso.costo,
    carga_horaria: curso.carga_horaria,
    tipo_curso: curso.tipo_curso,
    profesores: curso.profesores,
    alumnos: curso.alumnos,
    nro_cuotas: curso.nro_cuotas,
    imagen: curso.imagen,
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
  } = formData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleProfesoresChange = (text) => (e, data) => {
    setFormData({ ...formData, [text]: data.value });
  };

  const url = diplomaturas ? "/admin/diplomaturas" : "/admin/cursos";

  //evento Edit
  const handleEdit = (text) => (e) => {
    setOpen(false);
    e.preventDefault();
    setFormData({ ...formData });
    axios
      .put(`${process.env.REACT_APP_API_URL}/curso/edit/${text}`, {
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
        toast.success("Curso editado exitosamente");
        setTimeout(function () {
          window.location.href = { url };
        }, 2500);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const options = users
    .filter((x) => x.role === "Profesor")
    .map((x) => ({
      key: x._id,
      text: x.name,
      value: x._id,
    }));

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

function CursosAdmin({ diplomaturas }) {
  const [formData, setFormData] = useState({
    cursos: [],
    users: [],
  });

  const { cursos, users } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = () => {
    axios
      .all([
        axios.get(`${process.env.REACT_APP_API_URL}/cursos`),
        axios.get(`${process.env.REACT_APP_API_URL}/admin/users`),
      ])
      .then(
        axios.spread((cursos, users) => {
          const cursosArray = cursos.data;
          const usersArray = users.data;
          setFormData({
            ...formData,
            cursos: cursosArray,
            users: usersArray,
          });
        })
      )
      .catch((err) => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
      });
  };

  const addUrl = diplomaturas
    ? "/admin/diplomaturas/nuevo"
    : "/admin/cursos/nuevo";

  const data = cursos.filter((x) =>
    diplomaturas ? x.tipo_curso === "diplomatura" : x.tipo_curso === "curso"
  );

  return (
    <div>
      <ToastContainer />
      <Segment>
        <Header as="h2">
          <Link to={addUrl}>
            <Button floated="right" animated="vertical" positive>
              <Button.Content hidden>Agregar</Button.Content>
              <Button.Content visible>
                <Icon name="add" />
              </Button.Content>
            </Button>
          </Link>
          {diplomaturas ? "Administrar Diplomaturas" : "Administrar Cursos"}
        </Header>
        <Divider />
        <Container>
          <Item.Group divided>
            {data.length ? (
              data.map((curso) => (
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
                          <VerCurso curso={curso} users={users} />
                          <EditCurso
                            curso={curso}
                            users={users}
                            diplomaturas={diplomaturas}
                          />
                          <DeleteCurso curso={curso} />
                        </Button.Group>

                        {curso.costo && (
                          <>
                            <br />
                            <Label>
                              {" "}
                              <Icon name="money" /> {curso.costo}
                            </Label>
                          </>
                        )}
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                </>
              ))
            ) : (
              <NoFound
                text={
                  diplomaturas
                    ? "No se encontraron diplomaturas disponibles"
                    : "No se encontraron cursos disponibles"
                }
              />
            )}
          </Item.Group>
        </Container>
      </Segment>
    </div>
  );
}

export default CursosAdmin;
