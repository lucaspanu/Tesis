import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Container,
  Divider,
  Header,
  Icon,
  Segment,
  Image,
  Button,
  Grid,
  Table,
  Progress,
} from "semantic-ui-react";
import NoFound from "../../../Components/NoFound/NoFound";
import { isAuth } from "../../../helpers/auth";

function DashboardUser() {
  const [formData, setFormData] = useState({
    data: [],
    asistenciasData: [],
    cuotasData: [],
    cursoSeleccionado: null,
  });

  const { data, cursoSeleccionado, cuotasData, asistenciasData } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .all([
        axios.get(`${process.env.REACT_APP_API_URL}/cursos`),
        axios.get(`${process.env.REACT_APP_API_URL}/asistencias`),
        axios.get(`${process.env.REACT_APP_API_URL}/cuotas`),
      ])
      .then(
        axios.spread((cursos, asistencias, cuotas) => {
          setFormData({
            ...formData,
            data: cursos.data,
            asistenciasData: asistencias.data,
            cuotasData: cuotas.data,
          });
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSelectCurso = (curso) => {
    setFormData({ ...formData, cursoSeleccionado: curso });
  };

  const cursos = data
    .filter((x) => x.tipo_curso === "curso")
    .filter((x) => x.alumnos.some((x) => x === isAuth()._id));
  const diplomaturas = data
    .filter((x) => x.tipo_curso === "diplomatura")
    .filter((x) => x.alumnos.some((x) => x === isAuth()._id));
  return (
    <div>
      <Segment>
        <Header as="h1" dividing>
          Dashboard
        </Header>
        <Container>
          {cursoSeleccionado ? (
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
              <Asistencias asistencias={asistenciasData} />
              <Cuotas cuotas={cuotasData} />
            </>
          ) : (
            <>
              {/* Cursos */}
              <MapCursos
                titulo={"Cursos"}
                data={cursos}
                onClick={handleSelectCurso}
                buttonText={"Ir al Curso"}
                noDataText={"No estas inscripto a un curso"}
              />
              <Divider />
              {/* Diplomaturas */}
              <MapCursos
                titulo={"Diplomaturas"}
                data={diplomaturas}
                onClick={handleSelectCurso}
                buttonText={"Ir a la diplomatura"}
                noDataText={"No estas inscripto a una diplomatura"}
              />
            </>
          )}
        </Container>
      </Segment>
    </div>
  );
}

export default DashboardUser;

const Asistencias = ({ asistencias }) => {
  return (
    <Segment>
      <Header as="h3" dividing>
        Asistencias
      </Header>
    </Segment>
  );
};

const Cuotas = ({ cuotas, cursoSeleccionado }) => {
  return (
    <Segment>
      <Header as="h3" dividing>
        Cuotas
      </Header>
      {!!cursoSeleccionado?.nro_cuotas && (
        <Progress
          value={cuotas[cuotas.length - 1].nro_cuota}
          total={cursoSeleccionado.nro_cuotas}
          progress="ratio"
        />
      )}
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Fecha</Table.HeaderCell>
            <Table.HeaderCell>Monto</Table.HeaderCell>
            <Table.HeaderCell>Numero de Transaccion</Table.HeaderCell>
            <Table.HeaderCell>Numero de Cuota</Table.HeaderCell>
            <Table.HeaderCell>Intereses</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cuotas.length !== 0 ? (
            cuotas.map((cuota) => (
              <Table.Row>
                <Table.Cell>{cuota.fecha}</Table.Cell>
                <Table.Cell>{cuota.monto}</Table.Cell>
                <Table.Cell>{cuota.nro_transaccion}</Table.Cell>
                <Table.Cell>{cuota.nro_cuota}</Table.Cell>
                <Table.Cell>{cuota.intereses}</Table.Cell>
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
      </Table>
    </Segment>
  );
};

const MapCursos = ({ titulo, data, onClick, buttonText, noDataText }) => {
  return (
    <>
      <Header>{titulo}</Header>
      <Card.Group stackable itemsPerRow={4}>
        {data.length
          ? data.map((curso) => (
              <Card>
                <Image
                  src={
                    curso.imagen ||
                    "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                  }
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>{curso.titulo}</Card.Header>
                  <Card.Meta>
                    <span className="date">{curso.fecha}</span>
                  </Card.Meta>
                  <Card.Description>{curso.descripcion}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button.Group fluid>
                    <Button onClick={() => onClick(curso)}>{buttonText}</Button>
                  </Button.Group>
                </Card.Content>
              </Card>
            ))
          : null}
      </Card.Group>
      {!data.length && (
        <>
          <Divider hidden />
          <NoFound basic={false} text={noDataText} />
          <Divider hidden />
        </>
      )}
    </>
  );
};
