import React, { useEffect, useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  Col,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default function LocationCard(props) {
  return (
    <>
      <Col xs="6" md="4" xl="4">
        <Card>
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{props.type}</CardSubtitle>
            <CardText>Dimension: {props.dimension}</CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
