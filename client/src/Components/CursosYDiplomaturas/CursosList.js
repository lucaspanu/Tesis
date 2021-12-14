import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Modal,
  Segment,
} from "semantic-ui-react";
import NoFound from "../NoFound/NoFound";

export function CursoDetail({ curso, users }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button floated="right" primary>
          Ver mas
          <Icon name="chevron right" />
        </Button>
      }
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
              <Header>Numero de cuotas: </Header>
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

function CursosList() {
  const [formData, setFormData] = useState({
    cursos: [],
    users: [],
  });

  const { cursos, users } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
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
        console.error(err);
      });
  };

  const data = cursos.filter((x) => x.tipo_curso === "curso");

  return (
    <div>
      <Segment>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Section link>
              <Link to="/">Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section link>Cursos</Breadcrumb.Section>
          </Breadcrumb>
        </Container>
      </Segment>

      <Header as="h2" content="Nuestro Cursos" textAlign="center" />
      <Container style={{ minHeight: "60vh" }}>
        <Divider hidden />
        <Divider />
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
                      <CursoDetail curso={curso} users={users} />
                      {curso.costo ? (
                        <>
                          <br />
                          <Label>
                            {" "}
                            <Icon name="money" /> {curso.costo}
                          </Label>
                        </>
                      ) : null}
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </>
            ))
          ) : (
            <>
              <NoFound text={"No se encontraron cursos disponibles"} />
            </>
          )}
        </Item.Group>
      </Container>
      <Divider hidden />
    </div>
  );
}

export default CursosList;
