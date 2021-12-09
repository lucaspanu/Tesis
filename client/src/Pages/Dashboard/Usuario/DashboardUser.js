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
} from "semantic-ui-react";
import NoFound from "../../../Components/NoFound/NoFound";
import { isAuth } from "../../../helpers/auth";

function DashboardUser() {
  const [formData, setFormData] = useState({
    data: [],
  });

  const { data } = formData;

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
          data: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
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
          <Header>Cursos</Header>
          <Card.Group stackable itemsPerRow={4}>
            {cursos.length
              ? cursos.map((curso) => (
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
                      <a>
                        <Icon name="money" />
                        {`$ ${curso.costo || "-"}`}
                      </a>
                    </Card.Content>
                  </Card>
                ))
              : null}
          </Card.Group>
          {!cursos.length && (
            <>
              <Divider hidden />
              <NoFound basic={false} text={"No estas inscripto a un curso"} />
              <Divider hidden />
            </>
          )}
          <Divider />

          {/* Diplomaturas */}
          <Header>Diplomaturas</Header>
          <Card.Group stackable itemsPerRow={4}>
            {diplomaturas.length
              ? diplomaturas.map((curso) => (
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
                      <a>
                        <Icon name="money" />
                        {`$ ${curso.costo || "-"}`}
                      </a>
                    </Card.Content>
                  </Card>
                ))
              : null}
          </Card.Group>
          {!diplomaturas.length && (
            <>
              <Divider hidden />
              <NoFound
                basic={false}
                text={"No estas inscripto a una diplomatura"}
              />
              <Divider hidden />
            </>
          )}
        </Container>
      </Segment>
    </div>
  );
}

export default DashboardUser;
