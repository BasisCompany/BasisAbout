import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ marginBottom: "15px" }}>
        <Button
          variant="primary"
          href={props.link}
          target="_blank"
          disabled={props.isDev}
        >
          {props.isDev ? "В разработке" : "Посмотреть"}
        </Button>
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
