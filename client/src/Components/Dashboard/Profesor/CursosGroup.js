import React from "react";
import NoFound from "../../../Components/NoFound/NoFound";
import { Card, Divider, Image, Button } from "semantic-ui-react";
import { isAuth } from "../../../helpers/auth";

function CursosGroup({ data, formData, setFormData }) {
  const cursos =
    isAuth().role === "admin"
      ? data
      : data.filter((x) => x.profesores.some((x) => x === isAuth()._id));

  const handleSelectCurso = (curso) => {
    setFormData({ ...formData, cursoSeleccionado: curso });
  };
  return (
    <>
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
                    <Button positive onClick={() => handleSelectCurso(curso)}>
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
    </>
  );
}

export default CursosGroup;
