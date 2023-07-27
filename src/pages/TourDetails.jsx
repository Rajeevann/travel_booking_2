import React from "react";
import tourData from "../assets/data/tours";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import calculateavgRating from "../utils/avgRating";
import "../styles/tour-details.css";

const TourDetails = () => {
  const { id } = useParams();
  const tour = tourData.find((tour) => tour.id === id);

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateavgRating;

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex aic gap-5">
                    <span className="d-flex align-items-center gap-1">
                      <i
                        class="ri-star-s-fill"
                        style={{ color: "var(--secondary-color)" }}
                      />
                      {calculateavgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                    <span>
                      <i class="ri-map-pin-user-fill"></i>
                      {address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-2-line" />
                      {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line" />${price} / person
                    </span>
                    <span>
                      <i class="ri-group-line" />
                      {maxGroupSize}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
