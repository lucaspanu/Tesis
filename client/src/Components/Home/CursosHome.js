import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Container,
  Divider,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";

import card1 from "../../Assets/Image/Card/card1.jpg";

function CursosHome() {
  const [formData, setFormData] = useState({
    cursos: [],
  });

  const { cursos } = formData;

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
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const data = cursos.filter((x) => x.tipo_curso === "curso");

  return (
    <div>
      <Header as="h1" content="Cursos" textAlign="center" />
      <Divider hidden />
      <Card.Group stackable itemsPerRow={4}>
        {data.map((curso) => (
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
        ))}
      </Card.Group>
      <Divider hidden />
      <Container textAlign="center">
        <Button primary>Ver Mas</Button>
      </Container>
    </div>
  );
}

export default CursosHome;
