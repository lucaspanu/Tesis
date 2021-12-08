import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";

const NoFound = ({ text, basic = true }) => (
  <Segment textAlign="center" basic={basic}>
    <Header icon>
      <Icon name="search" />
      {text}
    </Header>
  </Segment>
);
export default NoFound;
