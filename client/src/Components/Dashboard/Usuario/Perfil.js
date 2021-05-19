import { isAuth } from "../../../helpers/auth";
import React, { Fragment, useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Message,
  Segment,
  Input,
  Radio,
} from "semantic-ui-react";

function Perfil() {
  // checkboxs
  const [value, setValue] = useState("");

  const id = isAuth()._id;

  // Perfil
  const [formData, setFormData] = useState({
    perfilId: "",
    userId: id,
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
  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //submit data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      dni &&
      apy_nom &&
      lugar_nacimiento &&
      edad &&
      cuil &&
      estado_civil &&
      nacionalidad
    ) {
      setFormData({ ...formData });
      axios
        .post(`${process.env.REACT_APP_API_URL}/perfil`, {
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
        })
        .then((res) => {
          setFormData({
            ...formData,
          });

          toast.success(res.data.message);
          setTimeout(function () {
            window.location.href = "/perfil";
          }, 2500);
        })
        .catch((err) => {
          setFormData({
            ...formData,
          });
          console.log(err.response);
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("Por favor completa los campos obligatorios");
    }
  };

  // Editar Perfil
  const handleEdit = (e) => {
    e.preventDefault();
    setFormData({ ...formData });
    axios
      .put(`${process.env.REACT_APP_API_URL}/perfil/edit/${perfilId}`, {
        userId: userId,
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
      })
      .then((res) => {
        toast.success("Perfil Actualizado");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  //Carga de Datos
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/perfil/${isAuth()._id}`)
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
    <div>
      <ToastContainer />
      <Segment>
        <Header as="h2" dividing>
          Perfil de {isAuth().name}
        </Header>
        <Container>
          {isAuth().role === "admin" ? (
            <Fragment>
              <Message positive>
                <Message.Header>Bienvenido Administrador</Message.Header>
              </Message>
            </Fragment>
          ) : estado ? (
            <Fragment>
              <Message positive>
                <Message.Header>
                  PUEDES SOLICITAR LA INSCRIPCION A LOS CURSOS
                </Message.Header>
                <p>
                  Recuerda que esta puede no ser aceptada de no ser un alumno
                  del mismo
                </p>
              </Message>
            </Fragment>
          ) : (
            <Fragment>
              <Message negative>
                <Message.Header>
                  COMPLETA LA FICHA PERSONAL PARA CONTINUAR
                </Message.Header>
                <p>
                  Completa los siguientes campos para inscribirte en los cursos
                  o diplomaturas
                </p>
              </Message>
            </Fragment>
          )}

          <Grid stackable>
            <Grid.Column width={3}>
              <Image
                size="medium"
                circular
                src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              ></Image>
            </Grid.Column>
            <Grid.Column width={9} verticalAlign="middle">
              <Header>
                <Label horizontal>Nombre: </Label>
                {isAuth().name}
              </Header>
              <Header>
                <Label horizontal>Correo: </Label>
                {isAuth().email}
              </Header>
            </Grid.Column>
            <Grid.Column width={2}>
              {" "}
              <Button
                as="div"
                labelPosition="right"
                style={{ marginBottom: "2px" }}
              >
                <Button icon>
                  <Icon name="pencil" />
                </Button>
                <Label as="a" basic>
                  Editar
                </Label>
              </Button>
              <Button as="div" labelPosition="right">
                <Button icon>
                  <Icon name="cog" />
                </Button>
                <Label as="a" basic>
                  Cambiar contrasena
                </Label>
              </Button>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
      <Container>
        <Grid>
          <Grid.Column>
            <Form onSubmit={estado ? handleEdit : handleSubmit}>
              <Segment>
                <Header
                  as="h2"
                  textAlign="center"
                  style={{ marginTop: "10px" }}
                >
                  Ficha Personal
                </Header>
                <br />
                <Header>Datos Personales</Header>
                <Form.Field
                  control={Input}
                  label="Apellido y Nombre"
                  placeholder="Apellido y Nombre"
                  onChange={handleChange("apy_nom")}
                  value={apy_nom}
                  required
                />
                <Form.Group widths="equal">
                  <Form.Field
                    required
                    control={Input}
                    label="Lugar de Nacimiento"
                    placeholder="Lugar de Nacimiento"
                    onChange={handleChange("lugar_nacimiento")}
                    value={lugar_nacimiento}
                  />
                  <Form.Field
                    required
                    control={Input}
                    label="Edad"
                    placeholder="Edad"
                    type="number"
                    onChange={handleChange("edad")}
                    value={edad}
                  />
                  <Form.Field
                    required
                    control={Input}
                    label="Fecha de Nacimiento"
                    placeholder="Fecha de Nacimiento"
                    type="date"
                    onChange={handleChange("fecha_nacimiento")}
                    value={fecha_nacimiento}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field
                    required
                    control={Input}
                    label="Nacionalidad"
                    placeholder="Nacionalidad"
                    onChange={handleChange("nacionalidad")}
                    value={nacionalidad}
                  />
                  <Form.Field
                    required
                    control={Input}
                    label="Estado Civil"
                    placeholder="Estado Civil"
                    onChange={handleChange("estado_civil")}
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
                    onChange={handleChange("dni")}
                    value={dni}
                  />
                  <Form.Field
                    required
                    control={Input}
                    label="Cuil"
                    placeholder="Cuil"
                    onChange={handleChange("cuil")}
                    value={cuil}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field
                    required
                    control={Input}
                    label="Domicilio Particular"
                    placeholder="Domicilio Particular"
                    onChange={handleChange("domicilio_particular")}
                    value={domicilio_particular}
                  />
                  <Form.Field
                    control={Input}
                    label="Fijo"
                    placeholder="Fijo"
                    onChange={handleChange("tel_fijo")}
                    value={tel_fijo}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field
                    control={Input}
                    label="Domicilio Profesional"
                    placeholder="Domicilio Profesional"
                    onChange={handleChange("domicilio_profesional")}
                    value={domicilio_profesional}
                  />
                  <Form.Field
                    required
                    control={Input}
                    label="Cel"
                    placeholder="Cel"
                    onChange={handleChange("tel_cel")}
                    value={tel_cel}
                  />
                </Form.Group>

                <Header>Estudios Universitarios de Grado</Header>
                <Form.Field
                  required
                  control={Input}
                  label="Nombre de la institucion"
                  onChange={handleChange("institucion")}
                  value={institucion}
                />
                <Form.Field
                  required
                  control={Input}
                  label="Titulo"
                  onChange={handleChange("titulo")}
                  value={titulo}
                />
                <Header>
                  Estudios de Posgrado Realizados en esta Facultad
                </Header>
                <Form.Field
                  control={Input}
                  label="Nombre "
                  onChange={handleChange("estudio_posgrado")}
                  value={estudio_posgrado}
                />
                <Header>
                  Actividad Docente en la Univerdidad Nacional de Tucuman
                </Header>

                <Form.Group inline>
                  <label>Quantity</label>
                  <Form.Field
                    control={Radio}
                    label="Docente"
                    value="Docente"
                    checked={value === "Docente"}
                    onChange={() =>
                      setValue("Docente") &&
                      handleChange("tipo_actividad_docente")
                    }
                  />
                  <Form.Field
                    control={Radio}
                    label="Aspirante"
                    value="Aspirante"
                    checked={value === "Aspirante"}
                    onChange={() =>
                      setValue("Aspirante") &&
                      handleChange("tipo_actividad_docente")
                    }
                  />
                  <Form.Field
                    control={Radio}
                    label="No-Docente"
                    value="No-Docente"
                    checked={value === "No-Docente"}
                    onChange={() =>
                      setValue("No-Docente") &&
                      handleChange("tipo_actividad_docente")
                    }
                  />
                  <Form.Field
                    control={Radio}
                    label="Ninguno"
                    value=""
                    checked={value === ""}
                    onChange={() =>
                      setValue("") && handleChange("tipo_actividad_docente")
                    }
                  />
                </Form.Group>
                <Form.Field
                  control={Input}
                  label="Facultad "
                  onChange={handleChange("facultad")}
                  value={facultad}
                />
                <Form.Field
                  control={Input}
                  label="Materia "
                  onChange={handleChange("materia")}
                  value={materia}
                />
                <Form.Input fluid label="Resolucion de designacion">
                  <FileBase
                    type="file"
                    multiple={false}
                    value={imagen_actividad_docente}
                    onDone={({ base64 }) =>
                      setFormData({
                        ...formData,
                        imagen_actividad_docente: base64,
                      })
                    }
                  />
                </Form.Input>
                <Header>Documentacion Adjunta</Header>
                <Form.Input fluid label="Fotografia 4x4">
                  <FileBase
                    type="file"
                    multiple={false}
                    value={imagen_fotografia}
                    onDone={({ base64 }) =>
                      setFormData({ ...formData, imagen_fotografia: base64 })
                    }
                  />
                </Form.Input>
                <Form.Input fluid label="Fotografia del DNI">
                  <FileBase
                    type="file"
                    multiple={false}
                    value={imagen_dni}
                    onDone={({ base64 }) =>
                      setFormData({ ...formData, imagen_dni: base64 })
                    }
                  />
                </Form.Input>
                <Form.Input fluid label="Fotografia del Titulo Universitario">
                  <FileBase
                    type="file"
                    multiple={false}
                    value={imagen_titulo_universitario}
                    onDone={({ base64 }) =>
                      setFormData({
                        ...formData,
                        imagen_titulo_universitario: base64,
                      })
                    }
                  />
                </Form.Input>
                <Form.Input fluid label="Fotografia CV">
                  <FileBase
                    type="file"
                    multiple={false}
                    value={imagen_cv}
                    onDone={({ base64 }) =>
                      setFormData({ ...formData, imagen_cv: base64 })
                    }
                  />
                </Form.Input>
                <Button color="teal" size="large" floated="right">
                  Guardar
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Perfil;
