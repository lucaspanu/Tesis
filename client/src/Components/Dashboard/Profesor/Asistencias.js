import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Header,
  Segment,
  Table,
  Button,
  Icon,
  Grid,
  Modal,
  Form,
} from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import CursosGroup from "./CursosGroup";

function Asistencias() {
  const [formData, setFormData] = useState({
    cursosData: [],
    asistencias: [],
    users: [],
    cursoSeleccionado: null,
  });

  const { cursosData, cursoSeleccionado, asistencias, users } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = () => {
    axios
      .all([
        axios.get(`${process.env.REACT_APP_API_URL}/cursos`),
        axios.get(`${process.env.REACT_APP_API_URL}/asistencias`),
        axios.get(`${process.env.REACT_APP_API_URL}/admin/users`),
      ])
      .then(
        axios.spread((cursos, asistencias, users) => {
          setFormData({
            ...formData,
            cursosData: cursos.data,
            asistencias: asistencias.data,
            users: users.data,
          });
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };

  const hasCursoSeleccionado = cursoSeleccionado !== null;

  const asistenciasFiltradas = asistencias.filter(
    (x) => x.id_curso === cursoSeleccionado?._id
  );

  const ultimoNumeroAsistencias =
    asistenciasFiltradas[asistenciasFiltradas.length - 1]?.nro_clase + 1 || 1;

  return (
    <div>
      <ToastContainer />
      <Segment>
        <Header as="h1" dividing>
          Asistencias
        </Header>
        <Container>
          {hasCursoSeleccionado ? (
            <>
              <Header as="h3" dividing>
                <Grid>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Button
                        labelPosition="left"
                        onClick={() =>
                          setFormData({ ...formData, cursoSeleccionado: null })
                        }
                      >
                        <Icon name="arrow left" />
                        Volver
                      </Button>
                    </Grid.Column>
                    <Grid.Column>{cursoSeleccionado.titulo}</Grid.Column>
                  </Grid.Row>
                </Grid>
              </Header>
              <Table unstackable singleLine>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>N° Clase</Table.HeaderCell>
                    <Table.HeaderCell>Fecha</Table.HeaderCell>
                    <Table.HeaderCell>Alumnos</Table.HeaderCell>
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {asistenciasFiltradas.length !== 0 ? (
                    asistenciasFiltradas.map((asistencias) => (
                      <Table.Row>
                        <Table.Cell>{asistencias.nro_clase}</Table.Cell>
                        <Table.Cell>{asistencias.fecha}</Table.Cell>
                        <Table.Cell>
                          <VerAlumnos
                            alumnos={asistencias.alumnos}
                            users={users}
                          />
                        </Table.Cell>
                        <Table.Cell>
                          <Button.Group floated="left">
                            {/* <EditarAsistencias
                              cuota={cuota}
                              userName={userNameById(alumnoValue)}
                              cursoTitle={cursoTitleById(cursoValue)}
                            />*/}
                            <DeleteAsistencias asistencias={asistencias} />
                          </Button.Group>
                        </Table.Cell>
                      </Table.Row>
                    ))
                  ) : (
                    <Table.Row>
                      <Table.Cell>
                        <Icon name="x" />
                        No se encontraron asistencias
                      </Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
                <Table.Footer fullWidth>
                  <Table.Row>
                    <Table.HeaderCell colSpan="6">
                      <AddAsistencias
                        cursoSeleccionado={cursoSeleccionado}
                        users={users}
                        ultimoNumeroAsistencias={ultimoNumeroAsistencias}
                      />
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </>
          ) : (
            <CursosGroup
              data={cursosData}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </Container>
      </Segment>
    </div>
  );
}

export default Asistencias;

function AddAsistencias({ cursoSeleccionado, users, ultimoNumeroAsistencias }) {
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    id_curso: cursoSeleccionado._id,
    fecha: "",
    nro_clase: ultimoNumeroAsistencias,
    alumnos: [],
  });

  useEffect(() => {
    let alumnosNuevo = [];
    cursoSeleccionado.alumnos.map((x) =>
      alumnosNuevo.push({ alumno: x, presente: false })
    );
    setFormData({ ...formData, alumnos: alumnosNuevo });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { id_curso, fecha, nro_clase, alumnos } = formData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //submit data to backend
  const handleSubmit = () => {
    if (fecha) {
      setOpen(false);
      setFormData({ ...formData });
      axios
        .post(`${process.env.REACT_APP_API_URL}/asistencias`, {
          id_curso,
          fecha,
          nro_clase,
          alumnos,
        })
        .then((res) => {
          toast.success(res.data.message);
          setTimeout(function () {
            window.location.href = "/admin/asistencias";
          }, 2500);
        })
        .catch((err) => {
          setFormData({
            ...formData,
            fecha: "",
            nro_clase: nro_clase + 1,
          });
          console.log(err.response);
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("Por favor agrega una fecha");
    }
  };

  const userNameById = (userId) => {
    const user = users.find((x) => x._id === userId);
    return user.name;
  };

  const asistenciaPresente = (alumnoId) => {
    return alumnos.find((x) => x.alumno === alumnoId)?.presente;
  };

  const changeAsistencia = (alumnoId, presente) => {
    const newAlumno = { alumno: alumnoId, presente: presente };
    const alumnosCambio = [
      ...alumnos.filter((x) => x.alumno !== alumnoId),
      newAlumno,
    ];
    setFormData({ ...formData, alumnos: alumnosCambio });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button floated="right" icon labelPosition="left" primary size="small">
          <Icon name="newspaper outline" /> Cargar Asistencia
        </Button>
      }
    >
      <Modal.Header>{cursoSeleccionado.titulo}</Modal.Header>

      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              type="date"
              label="Fecha"
              onChange={handleChange("fecha")}
              value={fecha}
            />
            <Form.Input
              fluid
              type="number"
              label="Numero de Clase"
              onChange={handleChange("nro_clase")}
              value={nro_clase}
            />
          </Form.Group>
          <Segment style={{ display: "flex", justifyContent: "center" }}>
            <Table basic="very" celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Alumno</Table.HeaderCell>
                  <Table.HeaderCell>Presente</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {cursoSeleccionado.alumnos.map((x) => (
                  <Table.Row>
                    <Table.Cell>{userNameById(x)}</Table.Cell>
                    <Table.Cell>
                      <Button
                        positive={asistenciaPresente(x)}
                        icon
                        onClick={() =>
                          changeAsistencia(x, !asistenciaPresente(x))
                        }
                      >
                        <Icon name="check" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Segment>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary onClick={() => setOpen(false)}>
          Volver
        </Button>
        <Button positive onClick={() => handleSubmit()}>
          Cargar Asistencias
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

function DeleteAsistencias({ asistencias }) {
  const [open, setOpen] = React.useState(false);

  //evento Borrar
  const handleBorrar = (text) => (e) => {
    setOpen(false);
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/asistencias/${text}`)
      .then((res) => {
        toast.success("Asistencias eliminadas exitosamente");
        setTimeout(function () {
          window.location.href = "/admin/asistencias";
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
        Eliminar Asistencias
      </Header>
      <Modal.Content>
        <p>
          Esta seguro que desea eliminar estas asistencias ? No podra
          recuperarlas una vez eliminada
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> Volver
        </Button>
        <Button color="red" inverted onClick={handleBorrar(asistencias._id)}>
          <Icon name="checkmark" /> Eliminar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

function VerAlumnos({ alumnos, users }) {
  const [open, setOpen] = React.useState(false);

  const userNameById = (userId) => {
    const user = users.find((x) => x._id === userId);
    return user.name;
  };

  const getPresente = (x) => {
    return x ? "Presente" : "Ausente";
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={<Button circular primary icon="user" />}
    >
      <Header>Asistencias</Header>
      <Modal.Content>
        <Segment style={{ display: "flex", justifyContent: "center" }}>
          <Table basic="very" celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Alumnos</Table.HeaderCell>
                <Table.HeaderCell>Presente</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {alumnos.length !== 0
                ? alumnos.map((x) => (
                    <Table.Row>
                      <Table.Cell>{userNameById(x.alumno)}</Table.Cell>
                      <Table.Cell>{getPresente(x.presente)}</Table.Cell>
                    </Table.Row>
                  ))
                : null}
            </Table.Body>
          </Table>
        </Segment>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={() => setOpen(false)}>
          <Icon name="arrow left" /> Volver
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
