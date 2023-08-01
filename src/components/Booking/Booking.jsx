import React from "react";
import "./booking.css";
import { Form, FormGroup } from "reactstrap";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;

  const handleChange = (e) => {};

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price}
          <span>/per person</span>
        </h3>
        <span className="d-flex align-items-center">
          <i class="ri-star-s-fill" />
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* =====Booking Form ===== */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form action="" className="booking__info-form">
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullname"
              required
              onChange={handleChange}
            ></input>
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone "
              id="phone"
              required
              onChange={handleChange}
            ></input>
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="fullbookAtame"
              required
              onChange={handleChange}
            ></input>
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            ></input>
          </FormGroup>
        </Form>
      </div>
      {/* =====Booking Form End ===== */}
    </div>
  );
};

export default Booking;
