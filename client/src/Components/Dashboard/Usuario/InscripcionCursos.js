import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

function InscripcionCursos() {
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
        <Header as="h1" dividing>
          Inscripcion a Cursos
        </Header>
        <Header>Elije un curso:</Header>
        <Grid stackable padded>
          {cursos.map((curso) => (
            <>
              <Grid.Column computer="4" tablet="8" mobile="16">
                <Card fluid>
                  <Image
                    src={
                      curso.imagen ||
                      "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                    }
                  />
                  <Card.Content>
                    <Header floated="right" color="red"></Header>
                    <Card.Header>
                      <Header color="red">{curso.titulo}</Header>
                    </Card.Header>
                    <Card.Meta>Orders</Card.Meta>
                    <Card.Description>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit cum
                      augue varius, litora netus in et per dictumst eu auctor
                      consequat.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button.Group fluid>
                      <Button positive>Solicitar Adminision</Button>
                    </Button.Group>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </>
          ))}
        </Grid>
      </Segment>
    </div>
  );
}

export default InscripcionCursos;
