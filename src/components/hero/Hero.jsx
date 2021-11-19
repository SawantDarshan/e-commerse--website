import React from "react";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import webShop from "../../asset/web-shop.svg";
import webPurchase from "../../asset/web-purchase.svg";
import onlineShop from "../../asset/online-shop.svg";
import mockup from "../../asset/mockup-plasma.svg"

const Hero = () => {
  return (
    <Carousel
      className="text-white text-center"
      style={{ marginTop: "4em", backgroundColor: "white" }}
    >
      <Carousel.Item>
        <Row className="mx-5" style={{ minHeight: "50vh" }}>
          <Col className="mt-auto mb-auto" xs={12} md={6}>
            <Card className="m-1 text-dark" style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>buy Dresses at 10% off</Card.Title>
                <Card.Text>
                  <p className="display-5">Online Shop</p>
                  <p>
                    for shopping <Link>login</Link>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} style={{position: "relative"}} className="p-5 m-auto ">
            <img
              className="img-fluid prisma-mockup"
              src={webShop}
              alt=""
              style={{ width: "20em" }}
            />
            <img src={mockup} alt="" className="position-absolute w-50 h-50" style={{zIndex: 1, right: 0}}/>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="mx-5" style={{ minHeight: "50vh" }}>
          <Col className="mt-auto mb-auto" xs={12} md={6}>
            <Card className="m-1 text-dark" style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>buy Shoes at 5% off</Card.Title>
                <Card.Text>
                  <p className="display-5">Online Shop</p>
                  <p>
                    for shopping <Link>login</Link>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} style={{position: "relative"}} className="p-5 m-auto">
            <img
              className="img-fluid prisma-mockup"
              src={webPurchase}
              al
              style={{ width: "20em" }}
              t=""
            />
            <img src={mockup} alt="" className="position-absolute w-50 h-50" style={{zIndex: 1, right: 0}}/>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="mx-5" style={{ minHeight: "50vh" }}>
          <Col className="mt-auto mb-auto" xs={12} md={6}>
            <Card className="m-1 text-dark" style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>buy Pants at 13% off</Card.Title>
                <Card.Text>
                  <p className="display-5">Online Shop</p>
                  <p>
                    for shopping <Link>login</Link>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} style={{position: "relative"}} className="p-5 m-auto">
            <img
              className="img-fluid prisma-mockup"
              src={onlineShop}
              alt=""
              style={{ width: "20em" }}
            />
            <img src={mockup} alt="" className="position-absolute w-50 h-50" style={{zIndex: 1, right: 0}}/>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;



