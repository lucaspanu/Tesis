import React from "react";
import {
  Button,
  Card,
  Container,
  Divider,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";

import DerechoAdministrativo from "../../Assets/Image/Especializaciones/DerechoAdministrativo.jpg";
import DerechoAmbiental from "../../Assets/Image/Especializaciones/DerechoAmbiental.jpg";
import DerechoDanos from "../../Assets/Image/Especializaciones/DerechoDanos.jpg";
import DerechoPenal from "../../Assets/Image/Especializaciones/DerechoPenal.jpg";

function EspecializacionesHome() {
  return (
    <div>
      <Header as="h1" content="Especializaciones" textAlign="center" />
      <Divider hidden />
      <Card.Group stackable itemsPerRow="4">
        <Card>
          <Image
            src={DerechoAdministrativo}
            size="small"
            wrapped
            ui={false}
            style={{ height: "180px", display: "flex" }}
          />
          <Card.Content>
            <Card.Header>Derecho Administrativo</Card.Header>
            <Card.Meta>
              <span className="date">Agosto 2021</span>
            </Card.Meta>
            <Card.Description>
              Redaccion de clausulas contractuales a la luz del codigo civil y
              comercial de la nacion
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="money" />
              $6200
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src={DerechoAmbiental}
            size="small"
            wrapped
            ui={false}
            style={{ height: "180px", display: "flex" }}
          />
          <Card.Content>
            <Card.Header>Derecho Ambiental</Card.Header>
            <Card.Meta>
              <span className="date">Agosto 2021</span>
            </Card.Meta>
            <Card.Description>
              Redaccion de clausulas contractuales a la luz del codigo civil y
              comercial de la nacion
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="money" />
              $6200
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src={DerechoDanos}
            size="small"
            wrapped
            ui={false}
            style={{ height: "180px", display: "flex" }}
          />
          <Card.Content>
            <Card.Header>Derecho de Daños</Card.Header>
            <Card.Meta>
              <span className="date">Agosto 2021</span>
            </Card.Meta>
            <Card.Description>
              Redaccion de clausulas contractuales a la luz del codigo civil y
              comercial de la nacion
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="money" />
              $6200
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src={DerechoPenal}
            size="small"
            wrapped
            ui={false}
            style={{ height: "180px", display: "flex" }}
          />
          <Card.Content>
            <Card.Header>Derecho Penal</Card.Header>
            <Card.Meta>
              <span className="date">Agosto 2021</span>
            </Card.Meta>
            <Card.Description>
              Redaccion de clausulas contractuales a la luz del codigo civil y
              comercial de la nacion
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="money" />
              $6200
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
      <Divider hidden />
      <Container textAlign="center">
        <Button secondary>Ver Mas</Button>
      </Container>
    </div>
  );
}

export default EspecializacionesHome;
