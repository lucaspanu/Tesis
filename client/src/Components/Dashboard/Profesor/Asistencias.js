import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Container,
  Divider,
  Header,
  Segment,
  Image,
  Button,
} from "semantic-ui-react";
import NoFound from "../../../Components/NoFound/NoFound";
import { isAuth } from "../../../helpers/auth";
import { ToastContainer, toast } from "react-toastify";

function Asistencias() {
  const [formData, setFormData] = useState({
    data: [],
  });

  const { data } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const cursos =
    isAuth().role === "admin"
      ? data
      : data.filter((x) => x.profesores.some((x) => x === isAuth()._id));

  return (
    <div>
      <ToastContainer />
      <Segment>
        <Header as="h1" dividing>
          Asistencias
        </Header>
        <Container>
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
                      <Button.Group fluid>
                        {/* <Button positive onClick={() => handleSubmit(curso._id)}> */}
                        <Button positive onClick={() => {}}>
                          Administrar asistencias
                        </Button>
                      </Button.Group>
                    </Card.Content>
                  </Card>
                ))
              : null}
          </Card.Group>
          {!cursos.length && (
            <>
              <Divider hidden />
              <NoFound text={"No se encontraron cursos disponibles"} />
              <Divider hidden />
            </>
          )}
        </Container>
      </Segment>
    </div>
  );
}

export default Asistencias;
