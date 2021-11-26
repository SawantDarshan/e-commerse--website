import React from "react";
import { Card,Button } from "react-bootstrap";
import useStyles from "./styles";

const AboutCard = ({url,name,details, image}) => {
    let classes = useStyles()
    

  return (
    <div  className="col-12 col-lg-6 col-md-6 p-1">
      <Card className={classes.root}>
        <Card.Body className="bg-dark text-white rounded-top border border-warning">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              Technologies: {details}
          </Card.Text>
        <a className="btn btn-warning m-auto" style={{maxWidth: "10rem"}} href={url} target="blank">Check Out</a>
        </Card.Body>
        <Card.Img variant="bottom" src={image}></Card.Img>
      </Card>
    </div>
  );
};

export default AboutCard;
