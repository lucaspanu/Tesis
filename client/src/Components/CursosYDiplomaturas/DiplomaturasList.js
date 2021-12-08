import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Container,
  Divider,
  Header,
  Icon,
  Item,
  Label,
  Segment,
} from "semantic-ui-react";
import { CursoDetail } from "./CursosList";
import NoFound from "../NoFound/NoFound";

function DiplomaturasList() {
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

  const data = cursos.filter((x) => x.tipo_curso === "diplomatura");
  return (
    <div>
      <Segment>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Section link>
              <Link to="/">Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section link>Diplomaturas</Breadcrumb.Section>
          </Breadcrumb>
        </Container>
      </Segment>

      <Header as="h2" content="Nuestras Diplomaturas" textAlign="center" />
      <Divider hidden />
      <Container style={{ minHeight: "60vh" }}>
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
              <Divider hidden />
              <NoFound
                basic={false}
                text={"No se encontraron diplomaturas disponibles"}
              />
            </>
          )}
        </Item.Group>
      </Container>
      <Divider hidden />
    </div>
  );
}

export default DiplomaturasList;
