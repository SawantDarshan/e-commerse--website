import React from "react";
import { Apartment } from "@material-ui/icons";
import AboutCard from "./aboutCard/AboutCard";
import imgCocktail from "../../asset/get-cocktail.PNG";
import imgFood from "../../asset/food.PNG";

import { Container } from "react-bootstrap";


const About = () => {
  return (
    <div className="text-center mt-5 pt-5 gradient-light container-fluid">
      <h1 className="display-4 my-3 heading1">
      <Apartment style={{ fontSize: "1em" }} />
      </h1>
      <p className="text-left">
      Hi, This is <em><strong> darshan Sawant (Softwear Developer) </strong></em>
      </p>
      <hr />
      <br />
      <br />
      <h2 className="text-danger">
        PROJECTS
      </h2>
      <br />
      <br />
      <Container>
      <div className="row">
      <AboutCard name="GET COCKTAIL" url="https://get-cocktail.netlify.app/" details="React.js, CSS, HTML, JavaScript" image={imgCocktail}/>
      <AboutCard name="FOOD MENU" url="https://sawantdarshan.github.io/Food-Menu/" details="JavaScript, HTML, CSS, BOOTSTRAP" image={imgFood}/>
      </div>
      </Container>
      
    </div>
  );
};

export default About;
