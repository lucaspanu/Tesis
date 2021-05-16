import React from "react";
import { Divider, Grid, Header, Segment, Icon, Table } from "semantic-ui-react";

function InfoContacto() {
  return (
    <div>
      <Segment>
        <Header dividing as="h1">
          Datos de contacto
        </Header>
        <br />
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              <Table celled striped color="blue">
                <Table.Header>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Asunto</Table.HeaderCell>
                    <Table.HeaderCell>Contacto</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>CONSULTAS GENERALES DE POSGRADO</Table.Cell>
                    <Table.Cell>
                      <Icon name="mail outline" />
                      secretaria.posgrado@derecho.unt.edu.ar
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>OFERTA ACADEMICA</Table.Cell>
                    <Table.Cell>
                      Redes sociales:"POSGRADO DERECHO" <br />
                      <Icon name="mail outline" />
                      secretaria.posgrado@derecho.unt.edu.ar
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>PAGO DE CUOTAS, LIBRE DE DEUDAS</Table.Cell>
                    <Table.Cell>
                      <Icon name="mail outline" />
                      administraciocontable@derecho.unt.edu.ar
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      INSCRIPCION A CARRERAS, DIPLOMATURAS Y CURSOS
                    </Table.Cell>
                    <Table.Cell>
                      Link de Inscripciones en la web,
                      <br /> redes sociales o solicitando a:
                      <br />
                      <Icon name="mail outline" />
                      secretaria.posgrado@derecho.unt.edu.ar
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      CARRERA DE ESPECIALIZACION EN DERECHO PROCESAL
                    </Table.Cell>
                    <Table.Cell>
                      <Icon name="mail outline" />
                      especializacion.derechoprocesal@derecho.unt.edu.ar
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      CARRERA DE ESPECIALIZACION EN DERECHO DE DANOS
                    </Table.Cell>
                    <Table.Cell>
                      <Icon name="mail outline" />
                      derechodedanos@derecho.unt.edu.ar
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      CARRERA DE ESPECIALIZACION EN DERECHO Administrativo
                    </Table.Cell>
                    <Table.Cell>
                      <Icon name="mail outline" />
                      espec.admin@derecho.unt.edu.ar
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      CARRERA DE ESPECIALIZACION EN DERECHO PENAL
                    </Table.Cell>
                    <Table.Cell>
                      <Icon name="mail outline" />
                      especializacion.penal@derecho.unt.edu.ar
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>DOCTORADO EN DERECHO</Table.Cell>
                    <Table.Cell>
                      <Icon name="mail outline" />
                      doctoradoenderechount@gmail.com
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>

            <Grid.Column width={6}>
              <Segment>
                <Header>Redes sociales</Header>
                <a
                  href="https://www.facebook.com/profile.php?id=100005949195316"
                  target="_blank"
                >
                  <Icon name="facebook f" />
                  Facebook
                </a>{" "}
                <br />
                <a
                  href="https://www.instagram.com/posgradosderechount/"
                  target="_blank"
                >
                  <Icon name="instagram" />
                  Instagram
                </a>{" "}
                <br />
                <Icon name="mail" />
                secretaria.posgrado@derecho.unt.edu.ar
                <Divider />
                <Icon name="user" />
                Decana: Adela Segui <br />
                <Icon name="user outline" />
                Secretaria de Posgrado: Elizabeth Schmieloz <br />
                <Icon name="user outline" />
                Subsecretaria: Isolina Barbaglia
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default InfoContacto;
