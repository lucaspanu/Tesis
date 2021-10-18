import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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

function Modales({ curso }) {
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

function CursosList() {
  const [formData, setFormData] = useState({
    cursos: [],
  });

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
        console.log(cursos);
      })
      .catch((err) => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
      });
  };

  const { cursos } = formData;
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

      <Divider hidden />
      <Header as="h2" content="Nuestro Cursos" textAlign="center" />
      <Divider hidden />
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
                    <Modales curso={curso} />
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
      <Divider hidden />
    </div>
  );
}

export default CursosList;
