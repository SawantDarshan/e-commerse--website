import React from "react";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import webShop from "../../asset/web-shop.svg";
import webPurchase from "../../asset/web-purchase.svg";
import onlineShop from "../../asset/online-shop.svg";
import mockup from "../../asset/mockup-plasma.svg";

const Hero = () => {
  return (
    <Carousel
      className="text-white text-center bg-info"
      style={{ marginTop: "4em", height: "400px" }}
    >
      <Carousel.Item>
        <Row className="mx-5" style={{ minHeight: "50vh" }}>
          <Col className="mt-auto mb-auto" xs={12} md={6}>
            <Card className="m-1 text-dark" style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Buy Dresses at 10% off</Card.Title>
                  <Card.Text className="display-5 text-primary">Online Shop</Card.Text>
                <Card.Text>
                  <small>
                    For shopping{" "}
                    <Link to="/login" className="text-info">
                      login
                    </Link>
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={6}
            style={{ position: "relative" }}
            className="p-5 m-auto "
          >
            <img
              className="img-fluid prisma-mockup"
              src={webShop}
              alt="hero-img"
              style={{ width: "20em" }}
            />
            <img
              src={mockup}
              alt="hero-img"
              className="position-absolute w-50 h-50"
              style={{ zIndex: 1, right: 0 }}
            />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="mx-5" style={{ minHeight: "50vh" }}>
          <Col className="mt-auto mb-auto" xs={12} md={6}>
            <Card className="m-1 text-dark" style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Buy Shoes at 5% off</Card.Title>
                  <Card.Text className="display-5 text-primary">Online Shop</Card.Text>
                <Card.Text>
                  <small>
                    For shopping{" "}
                    <Link to="/login" className="text-info">
                      login
                    </Link>
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={6}
            style={{ position: "relative" }}
            className="p-5 m-auto"
          >
            <img
              className="img-fluid prisma-mockup"
              src={webPurchase}
              alt="hero-img"
              style={{ width: "20em" }}
            />
            <img
              src={mockup}
              alt="hero-img"
              className="position-absolute w-50 h-50"
              style={{ zIndex: 1, right: 0 }}
            />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="mx-5" style={{ minHeight: "50vh" }}>
          <Col className="mt-auto mb-auto" xs={12} md={6}>
            <Card className="m-1 text-dark" style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Buy Pants at 13% off</Card.Title>
                  <Card.Text className="display-5 text-primary">Online Shop</Card.Text>
                <Card.Text>
                  <small>
                    For shopping{" "}
                    <Link to="/login" className="text-info">
                      login
                    </Link>
                  </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={6}
            style={{ position: "relative" }}
            className="p-5 m-auto"
          >
            <img
              className="img-fluid prisma-mockup"
              src={onlineShop}
              alt="hero-img"
              style={{ width: "20em" }}
            />
            <img
              src={mockup}
              alt="hero-img"
              className="position-absolute w-50 h-50"
              style={{ zIndex: 1, right: 0 }}
            />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
