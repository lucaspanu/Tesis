import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Header,
  Segment,
  Dropdown,
  Button,
  Divider,
  Table,
  Icon,
  Modal,
  Form,
} from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";

function Cuotas() {
  const [formData, setFormData] = useState({
    cursoValue: null,
    alumnoValue: null,
    cursos: [],
    users: [],
    cuotas: [],
    activeTable: false,
    activeCuotas: [],
  });

  const {
    alumnoValue,
    cursoValue,
    cursos,
    users,
    cuotas,
    activeTable,
    activeCuotas,
  } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = () => {
    axios
      .all([
        axios.get(`${process.env.REACT_APP_API_URL}/cursos`),
        axios.get(`${process.env.REACT_APP_API_URL}/cuotas`),
        axios.get(`${process.env.REACT_APP_API_URL}/admin/users`),
      ])
      .then(
        axios.spread((cursos, cuotas, users) => {
          const cursosArray = cursos.data;
          const cuotasArray = cuotas.data;
          const usersArray = users.data;
          setFormData({
            ...formData,
            cursos: cursosArray,
            cuotas: cuotasArray,
            users: usersArray,
          });
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };

  const userNameById = (userId) => {
    const user = users.find((x) => x._id === userId);
    return user.name;
  };

  const cursoTitleById = (cursoId) => {
    const curso = cursos.find((x) => x._id === cursoId);
    return curso.titulo;
  };

  const handleChangle = (text) => (e, data) => {
    setFormData({ ...formData, [text]: data.value });
  };

  const cursosOptions = cursos.map((x) => ({
    key: x._id,
    text: x.titulo,
    value: x._id,
  }));

  const alumnosOptions = cursoValue
    ? cursos
        .find((x) => x._id === cursoValue)
        .alumnos.map((x) => ({
          key: x,
          text: userNameById(x),
          value: x,
        }))
    : [];

  const handleSearch = () => {
    const userCuotas = cuotas.filter(
      (x) => x.id_curso === cursoValue && x.id_alumno === alumnoValue
    );
    setFormData({ ...formData, activeTable: true, activeCuotas: userCuotas });
  };

  return (
    <div>
      <ToastContainer />
      <Segment>
        <Header as="h1" dividing>
          Cuotas
        </Header>
        <Container style={{ minHeight: "60vh" }}>
          <Dropdown
            placeholder="Selecciona un curso"
            fluid
            selection
            options={cursosOptions}
            value={cursoValue}
            onChange={handleChangle("cursoValue")}
          />
          <Dropdown
            placeholder="Selecciona un alumno"
            fluid
            selection
            options={alumnosOptions}
            value={alumnoValue}
            onChange={handleChangle("alumnoValue")}
          />
          <Button
            disabled={!cursoValue || !alumnoValue}
            positive
            floated="right"
            onClick={() => handleSearch()}
          >
            Cargar Cuotas
          </Button>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider />
          <Divider hidden />

          {activeTable && (
            <>
              <Table singleLine>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Fecha</Table.HeaderCell>
                    <Table.HeaderCell>Monto</Table.HeaderCell>
                    <Table.HeaderCell>Numero de Transaccion</Table.HeaderCell>
                    <Table.HeaderCell>Numero de Cuota</Table.HeaderCell>
                    <Table.HeaderCell>Intereses</Table.HeaderCell>
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {activeCuotas.length !== 0 ? (
                    activeCuotas.map((cuota) => (
                      <Table.Row>
                        <Table.Cell>{cuota.fecha}</Table.Cell>
                        <Table.Cell>{cuota.monto}</Table.Cell>
                        <Table.Cell>{cuota.nro_transaccion}</Table.Cell>
                        <Table.Cell>{cuota.nro_cuota}</Table.Cell>
                        <Table.Cell>{cuota.intereses}</Table.Cell>
                        <Table.Cell>
                          <Button.Group floated="left">
                            <EditarCuota
                              cuota={cuota}
                              userName={userNameById(alumnoValue)}
                              cursoTitle={cursoTitleById(cursoValue)}
                            />
                            <DeleteCuota cuota={cuota} />
                          </Button.Group>
                        </Table.Cell>
                      </Table.Row>
                    ))
                  ) : (
                    <Table.Row>
                      <Table.Cell>
                        <Icon name="x" />
                        No se encontraron cuotas disponibles
                      </Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
                <Table.Footer fullWidth>
                  <Table.Row>
                    <Table.HeaderCell colSpan="6">
                      <AddCuota
                        userId={alumnoValue}
                        cursoId={cursoValue}
                        userName={userNameById(alumnoValue)}
                        cursoTitle={cursoTitleById(cursoValue)}
                      />
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </>
          )}
        </Container>
      </Segment>
    </div>
  );
}

export default Cuotas;

function DeleteCuota({ cuota }) {
  const [open, setOpen] = React.useState(false);

  //evento Borrar
  const handleBorrar = (text) => (e) => {
    setOpen(false);
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/cuotas/${text}`)
      .then((res) => {
        toast.success("Cuota eliminada exitosamente");
        setTimeout(function () {
          window.location.href = "/admin/cuotas";
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
        Eliminar Cuota
      </Header>
      <Modal.Content>
        <p>
          Esta seguro que desea eliminar esta cuota ? No podra recuperarla una
          vez eliminada
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> Volver
        </Button>
        <Button color="red" inverted onClick={handleBorrar(cuota._id)}>
          <Icon name="checkmark" /> Eliminar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

function EditarCuota({ cuota, userName, cursoTitle }) {
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    id_curso: cuota.id_curso,
    id_alumno: cuota.id_alumno,
    fecha: cuota.fecha,
    monto: cuota.monto,
    nro_transaccion: cuota.nro_transaccion,
    nro_cuota: cuota.nro_cuota,
    intereses: cuota.intereses,
  });

  const {
    id_curso,
    id_alumno,
    fecha,
    monto,
    nro_transaccion,
    nro_cuota,
    intereses,
  } = formData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //evento Edit
  const handleEdit = (text) => (e) => {
    setOpen(false);
    e.preventDefault();
    setFormData({ ...formData });
    axios
      .put(`${process.env.REACT_APP_API_URL}/cuotas/edit/${text}`, {
        id_curso,
        id_alumno,
        fecha,
        monto,
        nro_transaccion,
        nro_cuota,
        intereses,
      })
      .then((res) => {
        toast.success("Curso editado exitosamente");
        setTimeout(function () {
          window.location.href = "/admin/cuotas";
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
      <Modal.Header>{`${userName} / ${cursoTitle}`}</Modal.Header>

      <Modal.Content>
        <Form>
          <Form.Input
            fluid
            disabled
            type="text"
            label="Usuario"
            value={userName}
          />
          <Form.Input
            fluid
            disabled
            type="text"
            label="Curso"
            value={cursoTitle}
          />
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
              label="Monto"
              onChange={handleChange("monto")}
              value={monto}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              type="number"
              label="Numero de Transaccion"
              onChange={handleChange("nro_transaccion")}
              value={nro_transaccion}
            />
            <Form.Input
              fluid
              type="number"
              label="Numero de Cuota"
              onChange={handleChange("nro_cuota")}
              value={nro_cuota}
            />
            <Form.Input
              fluid
              type="number"
              label="Intereses"
              onChange={handleChange("intereses")}
              value={intereses}
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary onClick={() => setOpen(false)}>
          Volver
        </Button>
        <Button positive onClick={handleEdit(cuota._id)}>
          Editar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

function AddCuota({ userId, cursoId, userName, cursoTitle }) {
  const [open, setOpen] = React.useState(false);

  const [formCuotasData, setFormCuotasData] = useState({
    id_curso: cursoId,
    id_alumno: userId,
    fecha: null,
    monto: null,
    nro_transaccion: null,
    nro_cuota: null,
    intereses: null,
  });

  const {
    id_curso,
    id_alumno,
    fecha,
    monto,
    nro_transaccion,
    nro_cuota,
    intereses,
  } = formCuotasData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormCuotasData({ ...formCuotasData, [text]: e.target.value });
  };

  //submit data to backend
  const handleSubmit = () => {
    if (fecha && monto && nro_transaccion && nro_cuota) {
      setFormCuotasData({ ...formCuotasData });
      axios
        .post(`${process.env.REACT_APP_API_URL}/cuotas`, {
          id_curso,
          id_alumno,
          fecha,
          monto,
          nro_transaccion,
          nro_cuota,
          intereses,
        })
        .then((res) => {
          toast.success(res.data.message);
        })
        .catch((err) => {
          setFormCuotasData({
            ...formCuotasData,
            fecha: null,
            monto: null,
            nro_transaccion: null,
            nro_cuota: null,
            intereses: null,
          });
          console.log(err.response);
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("Por favor completa todos los campos");
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button floated="right" icon labelPosition="left" primary size="small">
          <Icon name="newspaper outline" /> Cargar Cuota
        </Button>
      }
    >
      <Modal.Header>{`${userName} / ${cursoTitle}`}</Modal.Header>

      <Modal.Content>
        <Form>
          <Form.Input
            fluid
            disabled
            type="text"
            label="Usuario"
            value={userName}
          />
          <Form.Input
            fluid
            disabled
            type="text"
            label="Curso"
            value={cursoTitle}
          />
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
              label="Monto"
              onChange={handleChange("monto")}
              value={monto}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              type="number"
              label="Numero de Transaccion"
              onChange={handleChange("nro_transaccion")}
              value={nro_transaccion}
            />
            <Form.Input
              fluid
              type="number"
              label="Numero de Cuota"
              onChange={handleChange("nro_cuota")}
              value={nro_cuota}
            />
            <Form.Input
              fluid
              type="number"
              label="Intereses"
              onChange={handleChange("intereses")}
              value={intereses}
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary onClick={() => setOpen(false)}>
          Volver
        </Button>
        <Button positive onClick={() => handleSubmit()}>
          Cargar Cuota
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
