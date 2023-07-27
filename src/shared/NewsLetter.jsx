import React from "react";
import { Container, Row, Col } from "reactstrap";
import SignUp from "../../src/assets/images/male-tourist.png";
import "./newsletter.css";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful travelling information</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat cum officiis quidem rem quisquam autem aperiam
                reprehenderit. Cum nisi asperiores quas quibusdam facere unde,
                modi quod eaque esse ipsa animi!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={SignUp} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
