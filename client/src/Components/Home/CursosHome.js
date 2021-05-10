import React from "react";
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";

import card1 from "../../Assets/Image/Card/card1.jpg";
import card2 from "../../Assets/Image/Card/card2.jpg";
import card3 from "../../Assets/Image/Card/card3.jpg";
import card4 from "../../Assets/Image/Card/card4.jpg";

function CursosHome() {
  return (
    <div>
      <Header as="h1" content="Cursos" textAlign="center" />
      <Divider hidden />
      <Card.Group stackable itemsPerRow="4">
        <Card>
          <Image src={card1} wrapped ui={false} />
          <Card.Content>
            {/* <Card.Header>Titulo</Card.Header> */}
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
          <Image src={card1} wrapped ui={false} />
          <Card.Content>
            {/* <Card.Header>Titulo</Card.Header> */}
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
          <Image src={card1} wrapped ui={false} />
          <Card.Content>
            {/* <Card.Header>Titulo</Card.Header> */}
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
          <Image src={card1} wrapped ui={false} />
          <Card.Content>
            {/* <Card.Header>Titulo</Card.Header> */}
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
        <Button primary>Ver Mas</Button>
      </Container>
    </div>
  );
}

export default CursosHome;
