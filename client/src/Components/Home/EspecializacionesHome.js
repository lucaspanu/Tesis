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
import { Link } from "react-router-dom";
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
              <span className="date">Mayo 2022</span>
            </Card.Meta>
            <Card.Description>
              Dirección: Blanca Herrera de Villavicencio | Duración: 2 años -
              536 hs. | Clases: 8 a 13 hs.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="money" />
            19 cuotas de $6.100
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
              <span className="date">Noviembre 2022</span>
            </Card.Meta>
            <Card.Description>
              Dirección: Adela Seguí, Claudia Sbdar | Duración: 2 años - 380 hs.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="money" />
            19 cuotas de $6.100
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
              <span className="date">Agosto 2022</span>
            </Card.Meta>
            <Card.Description>
              Dirección: Adela Segui | Duración: 2 años - 380 hs. | Clases:
              Viernes de 16 a 20 hs.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="money" />
            19 cuotas de $6.100
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
              <span className="date">Junio 2022</span>
            </Card.Meta>
            <Card.Description>
              Dirección: Carlos Caramuti | Duración: 2 años - 372 hs. | Clases:
              Viernes de 12 a 16 hs.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="money" />
            19 cuotas de $6.100
          </Card.Content>
        </Card>
      </Card.Group>
      <Divider hidden />
      <Container textAlign="center">
        <Button as={Link} to="/especializaciones" secondary>
          Ver Mas
        </Button>
      </Container>
    </div>
  );
}

export default EspecializacionesHome;
