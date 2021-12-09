import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Table,
  Divider,
  Header,
  Modal,
  Icon,
} from "semantic-ui-react";
import { toast } from "react-toastify";
import NoFound from "../../NoFound/NoFound";

function InscripcionesTable() {
  const [formData, setFormData] = useState({
    inscripciones: [],
    users: [],
    cursos: [],
  });

  const { inscripciones, users, cursos } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .all([
        axios.get(`${process.env.REACT_APP_API_URL}/cursos`),
        axios.get(`${process.env.REACT_APP_API_URL}/admin/users`),
        axios.get(`${process.env.REACT_APP_API_URL}/inscripciones`),
      ])
      .then(
        axios.spread((cursos, users, inscripciones) => {
          const cursosArray = cursos.data;
          const usersArray = users.data;
          const inscripcionesArray = inscripciones.data;
          setFormData({
            ...formData,
            cursos: cursosArray,
            users: usersArray,
            inscripciones: inscripcionesArray,
          });
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };

  return inscripciones.length ? (
    <Container>
      <Table compact celled singleLine basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Curso</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {inscripciones.map((inscripcion) => (
            <Table.Row>
              <Table.Cell>
                {users.find((x) => x._id === inscripcion.id_alumno).name}
              </Table.Cell>
              <Table.Cell>
                {users.find((x) => x._id === inscripcion.id_alumno).email}
              </Table.Cell>
              <Table.Cell>
                {cursos.find((x) => x._id === inscripcion.id_curso).titulo}
              </Table.Cell>
              <Button.Group floated="left">
                <AceptarInscripcion
                  inscripcion={inscripcion}
                  cursos={cursos}
                  users={users}
                />
                <DeleteInscripcion inscripcion={inscripcion} />
              </Button.Group>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  ) : (
    <>
      <Divider hidden />
      <NoFound text={"No se encontraron Inscripciones abiertas"} />
    </>
  );
}

export default InscripcionesTable;

function DeleteInscripcion({ inscripcion }) {
  const [open, setOpen] = React.useState(false);

  //evento Borrar
  const handleBorrar = (text) => (e) => {
    setOpen(false);
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/inscripcion/${text}`)
      .then((res) => {
        toast.success("Inscripcion eliminado exitosamente");
        setTimeout(function () {
          window.location.href = "/admin/inscripciones";
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
      trigger={<Button circular negative icon="x" />}
    >
      <Header icon>
        <Icon name="delete" />
        Esta seguro que desea rechazar la inscripcion?
      </Header>
      <Modal.Content>
        <p>
          Esta seguro que desea rechazar la inscripcion? No podra recuperarla
          una vez eliminado
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> Volver
        </Button>
        <Button color="red" inverted onClick={handleBorrar(inscripcion._id)}>
          <Icon name="checkmark" /> Eliminar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

function AceptarInscripcion({ inscripcion, users, cursos }) {
  const [open, setOpen] = React.useState(false);

  const alumno = users.find((x) => x._id === inscripcion.id_alumno);
  const curso = cursos.find((x) => x._id === inscripcion.id_curso);

  const handleAceptar = () => (e) => {
    setOpen(false);
    e.preventDefault();
    axios
      .all([
        axios.put(`${process.env.REACT_APP_API_URL}/curso/edit/${curso._id}`, {
          ...curso,
          alumnos: [...curso.alumnos, alumno._id],
        }),
        axios.delete(
          `${process.env.REACT_APP_API_URL}/inscripcion/${inscripcion._id}`
        ),
      ])
      .then((res) => {
        toast.success("Se acepto la inscripcion exitosamente");
        setTimeout(function () {
          window.location.href = "/admin/inscripciones";
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
      trigger={<Button circular positive icon="check" />}
    >
      <Header icon>
        <Icon name="check" />
        Esta seguro que desea aceptar la inscripcion
      </Header>
      <Modal.Content>
        <p>
          {`Desea confirmar la inscripcion del alumno ${alumno.name} al curso ${curso.titulo}`}
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> Volver
        </Button>
        <Button color="green" inverted onClick={handleAceptar()}>
          <Icon name="checkmark" /> Aceptar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
