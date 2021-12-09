import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Icon,
  Table,
  Modal,
  Form,
  Input,
  Header,
  Segment,
  Radio,
} from "semantic-ui-react";
import FileBase from "react-file-base64";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function UsersTable({ users }) {
  return (
    <Container>
      <ToastContainer />
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Fecha de Registro</Table.HeaderCell>
            <Table.HeaderCell>Correo</Table.HeaderCell>
            <Table.HeaderCell>Rol</Table.HeaderCell>
            <Table.HeaderCell>Perfil</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((usuario) => (
            <>
              <Table.Row>
                <Table.Cell>{usuario.name}</Table.Cell>
                <Table.Cell>{usuario.createdAt}</Table.Cell>
                <Table.Cell>{usuario.email}</Table.Cell>
                <Table.Cell>{usuario.role}</Table.Cell>
                <Table.Cell>
                  <VerPerfil usuario={usuario} />
                </Table.Cell>
              </Table.Row>
            </>
          ))}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Button
                as={Link}
                to="/admin/nuevo"
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Nuevo Usuario
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  );
}

export default UsersTable;

function VerPerfil({ usuario }) {
  const [open, setOpen] = React.useState(false);

  // Perfil
  const [formData, setFormData] = useState({
    perfilId: "",
    userId: usuario._id,
    dni: "",
    apy_nom: "",
    lugar_nacimiento: "",
    edad: "",
    fecha_nacimiento: "",
    nacionalidad: "",
    estado_civil: "",
    cuil: "",
    domicilio_particular: "",
    domicilio_profesional: "",
    tel_fijo: "",
    tel_cel: "",
    institucion: "",
    titulo: "",
    estudio_posgrado: "",
    tipo_actividad_docente: "",
    facultad: "",
    materia: "",
    imagen_actividad_docente: "",
    imagen_fotografia: "",
    imagen_dni: "",
    imagen_titulo_universitario: "",
    imagen_cv: "",
    estado: false,
  });

  const {
    perfilId,
    userId,
    dni,
    apy_nom,
    lugar_nacimiento,
    edad,
    fecha_nacimiento,
    nacionalidad,
    estado_civil,
    cuil,
    domicilio_particular,
    domicilio_profesional,
    tel_fijo,
    tel_cel,
    institucion,
    titulo,
    estudio_posgrado,
    tipo_actividad_docente,
    facultad,
    materia,
    imagen_actividad_docente,
    imagen_fotografia,
    imagen_dni,
    imagen_titulo_universitario,
    imagen_cv,
    estado,
  } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/perfil/${usuario._id}`)
      .then((res) => {
        const {
          dni,
          apy_nom,
          lugar_nacimiento,
          edad,
          fecha_nacimiento,
          nacionalidad,
          estado_civil,
          cuil,
          domicilio_particular,
          domicilio_profesional,
          tel_fijo,
          tel_cel,
          institucion,
          titulo,
          estudio_posgrado,
          tipo_actividad_docente,
          facultad,
          materia,
          imagen_actividad_docente,
          imagen_fotografia,
          imagen_dni,
          imagen_titulo_universitario,
          imagen_cv,
          estado,
        } = res.data.perfil;
        setFormData({
          ...formData,
          perfilId: res.data.perfil._id,
          dni,
          apy_nom,
          lugar_nacimiento,
          edad,
          fecha_nacimiento,
          nacionalidad,
          estado_civil,
          cuil,
          domicilio_particular,
          domicilio_profesional,
          tel_fijo,
          tel_cel,
          institucion,
          titulo,
          estudio_posgrado,
          tipo_actividad_docente,
          facultad,
          materia,
          imagen_actividad_docente,
          imagen_fotografia,
          imagen_dni,
          imagen_titulo_universitario,
          imagen_cv,
          estado,
        });
      })
      .catch((err) => {
        if (err.response == null) return;
        console.log(err);
        toast.error(`Error To Your Information ${err.response.statusText}`);
      });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button circular primary icon="eye" />}
    >
      <Modal.Header>{apy_nom}</Modal.Header>

      <Modal.Content>
        <Modal.Description>
          <Form>
            <Segment>
              <Header>Datos Personales</Header>
              <Form.Field
                control={Input}
                label="Apellido y Nombre"
                placeholder="Apellido y Nombre"
                value={apy_nom}
                required
              />
              <Form.Group widths="equal">
                <Form.Field
                  required
                  control={Input}
                  label="Lugar de Nacimiento"
                  placeholder="Lugar de Nacimiento"
                  value={lugar_nacimiento}
                />
                <Form.Field
                  required
                  control={Input}
                  label="Edad"
                  placeholder="Edad"
                  type="number"
                  value={edad}
                />
                <Form.Field
                  required
                  control={Input}
                  label="Fecha de Nacimiento"
                  placeholder="Fecha de Nacimiento"
                  type="date"
                  value={fecha_nacimiento}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  required
                  control={Input}
                  label="Nacionalidad"
                  placeholder="Nacionalidad"
                  value={nacionalidad}
                />
                <Form.Field
                  required
                  control={Input}
                  label="Estado Civil"
                  placeholder="Estado Civil"
                  value={estado_civil}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  required
                  control={Input}
                  label="DNI"
                  placeholder="DNI"
                  type="number"
                  value={dni}
                />
                <Form.Field
                  required
                  control={Input}
                  label="Cuil"
                  placeholder="Cuil"
                  value={cuil}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  required
                  control={Input}
                  label="Domicilio Particular"
                  placeholder="Domicilio Particular"
                  value={domicilio_particular}
                />
                <Form.Field
                  control={Input}
                  label="Fijo"
                  placeholder="Fijo"
                  value={tel_fijo}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  control={Input}
                  label="Domicilio Profesional"
                  placeholder="Domicilio Profesional"
                  value={domicilio_profesional}
                />
                <Form.Field
                  required
                  control={Input}
                  label="Cel"
                  placeholder="Cel"
                  value={tel_cel}
                />
              </Form.Group>

              <Header>Estudios Universitarios de Grado</Header>
              <Form.Field
                required
                control={Input}
                label="Nombre de la institucion"
                value={institucion}
              />
              <Form.Field
                required
                control={Input}
                label="Titulo"
                value={titulo}
              />
              <Header>Estudios de Posgrado Realizados en esta Facultad</Header>
              <Form.Field
                control={Input}
                label="Nombre "
                value={estudio_posgrado}
              />
              <Header>
                Actividad Docente en la Univerdidad Nacional de Tucuman
              </Header>

              <Form.Field
                control={Input}
                label="Actividad docente "
                value={tipo_actividad_docente}
              />
              <Form.Field control={Input} label="Facultad " value={facultad} />
              <Form.Field control={Input} label="Materia " value={materia} />
              <Form.Input fluid label="Resolucion de designacion">
                <FileBase
                  type="file"
                  multiple={false}
                  value={imagen_actividad_docente}
                />
              </Form.Input>
              <Header>Documentacion Adjunta</Header>
              <Form.Input fluid label="Fotografia 4x4">
                <FileBase
                  type="file"
                  multiple={false}
                  value={imagen_fotografia}
                />
              </Form.Input>
              <Form.Input fluid label="Fotografia del DNI">
                <FileBase type="file" multiple={false} value={imagen_dni} />
              </Form.Input>
              <Form.Input fluid label="Fotografia del Titulo Universitario">
                <FileBase
                  type="file"
                  multiple={false}
                  value={imagen_titulo_universitario}
                />
              </Form.Input>
              <Form.Input fluid label="Fotografia CV">
                <FileBase type="file" multiple={false} value={imagen_cv} />
              </Form.Input>
            </Segment>
          </Form>
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
