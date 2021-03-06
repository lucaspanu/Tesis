import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  Button,
  Card,
  Grid,
  Header,
  Image,
  Segment,
  Label,
  Icon,
} from "semantic-ui-react";
import { isAuth } from "../../../helpers/auth";
import NoFound from "../../NoFound/NoFound";

function InscripcionCursos({ diplomaturas }) {
  const [formData, setFormData] = useState({
    cursos: [],
    inscripciones: [],
    disabledButton: false,
  });

  const loadData = () => {
    axios
      .all([
        axios.get(`${process.env.REACT_APP_API_URL}/cursos`),
        axios.get(`${process.env.REACT_APP_API_URL}/inscripciones`),
      ])
      .then(
        axios.spread((cursos, inscripciones) => {
          const cursosArray = cursos.data;
          const inscripcionesArray = inscripciones.data;
          setFormData({
            ...formData,
            cursos: cursosArray,
            inscripciones: inscripcionesArray,
          });
        })
      )
      .catch((errors) => {
        console.error(errors);
        toast.error(`Error To Your Information`);
      });
  };

  //Carga de Datos
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { cursos, inscripciones, disabledButton } = formData;

  //submit data to backend
  const handleSubmit = (cursoId) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/inscripcion`, {
        id_alumno: isAuth()._id,
        id_curso: cursoId,
      })
      .then((res) => {
        toast.success(res.data.message);
        setFormData({ ...formData, disabledButton: true });
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.data.errors);
      });
  };

  const isIncripto = (cursoId) => {
    return cursos
      .find((x) => x._id === cursoId)
      .alumnos.some((x) => x === isAuth()._id);
  };

  const disabledButon = (cursoId) => {
    return (
      inscripciones.some(
        (x) => x.id_alumno === isAuth()._id && x.id_curso === cursoId
      ) || isIncripto(cursoId)
    );
  };

  const data = cursos?.filter((x) =>
    diplomaturas ? x.tipo_curso === "diplomatura" : x.tipo_curso === "curso"
  );

  return (
    <div>
      <ToastContainer />
      <Segment>
        <Header as="h1" dividing>
          {diplomaturas ? "Inscripcion a Diplomaturas" : "Inscripcion a Cursos"}
        </Header>
        {data.length ? (
          <>
            <Header>Elije un curso:</Header>
            <Grid stackable padded>
              {data.map((curso) => (
                <Fragment key={curso._id}>
                  <Grid.Column computer="4" tablet="8" mobile="16">
                    <Card fluid>
                      <Image
                        src={
                          curso.imagen ||
                          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                        }
                      />
                      <Card.Content>
                        <Card.Header>
                          <Header>{curso.titulo}</Header>
                        </Card.Header>
                        <Card.Meta>{curso.fecha}</Card.Meta>
                        <Card.Description>{curso.descripcion}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Button.Group fluid>
                          <Button
                            positive={!disabledButon(curso._id)}
                            onClick={() => handleSubmit(curso._id)}
                            disabled={
                              disabledButon(curso._id) || disabledButton
                            }
                          >
                            Solicitar Adminision
                          </Button>
                        </Button.Group>
                      </Card.Content>
                    </Card>
                    {isIncripto(curso._id) && (
                      <Label attached="top left" color="blue" ribbon="left">
                        <Icon name="checkmark" />
                        Inscripto
                      </Label>
                    )}
                  </Grid.Column>
                </Fragment>
              ))}
            </Grid>
          </>
        ) : (
          <NoFound
            text={
              diplomaturas
                ? "No se encontraron diplomaturas disponibles"
                : "No se encontraron cursos disponibles"
            }
          />
        )}
      </Segment>
    </div>
  );
}

export default InscripcionCursos;
