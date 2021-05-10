import React, { Component } from "react";
import { Accordion, Icon, List } from "semantic-ui-react";

export default class DAPlanEstudio extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          PRIMER CUATRIMESTRE
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <List.List as="ul">
            <List.Item as="li">
              Derecho Administrativo (principios y fuentes)
            </List.Item>
            <List.Item as="li">El Método en Derecho Administrativo</List.Item>
            <List.Item as="li">Administración y Constitución</List.Item>
            <List.Item as="li">Organización Administrativa</List.Item>
            <List.Item as="li">Acto Administrativo</List.Item>
          </List.List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          SEGUNDO CUATRIMESTRE
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <List.List as="ul">
            <List.Item as="li">
              Derecho Administrativo (principios y fuentes)
            </List.Item>
            <List.Item as="li">El Método en Derecho Administrativo</List.Item>
            <List.Item as="li">Administración y Constitución</List.Item>
            <List.Item as="li">Organización Administrativa</List.Item>
            <List.Item as="li">Acto Administrativo</List.Item>
          </List.List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          TERCER CUATRIMESTRE
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <List.List as="ul">
            <List.Item as="li">
              Derecho Administrativo (principios y fuentes)
            </List.Item>
            <List.Item as="li">El Método en Derecho Administrativo</List.Item>
            <List.Item as="li">Administración y Constitución</List.Item>
            <List.Item as="li">Organización Administrativa</List.Item>
            <List.Item as="li">Acto Administrativo</List.Item>
          </List.List>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          CUARTO CUATRIMESTRE
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <List.List as="ul">
            <List.Item as="li">
              Derecho Administrativo (principios y fuentes)
            </List.Item>
            <List.Item as="li">El Método en Derecho Administrativo</List.Item>
            <List.Item as="li">Administración y Constitución</List.Item>
            <List.Item as="li">Organización Administrativa</List.Item>
            <List.Item as="li">Acto Administrativo</List.Item>
          </List.List>
        </Accordion.Content>
      </Accordion>
    );
  }
}
