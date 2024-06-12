import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function SendMoneyPage() {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <section className="bg-primary rounded-4 px-4">
      <Row className="">
        <Col xs={12} sm={6} className="py-5 px-3">
          <section className="py-4">
            <p className="text-break display-2 text-light fw-bold">
              The fast and trusted way to send money
            </p>
            <p className="text-light fs-5">
              Millions of people check our international rates and send money
              online to 200 countries in 100 currencies.
            </p>
            <div className="d-flex flex-column flex-md-row align-items-center gap-3">
              <div className="d-flex gap-2 flex-row align-items-center border rounded-3 border-2 border-light px-3 py-1">
                <div className="d-flex align-items-center">
                  <Rating
                    initialValue={3.5}
                    iconsCount={4}
                    transition
                    allowFraction
                    allowHover
                    allowTitleTag
                  />
                </div>
                <p className="text-light fs-5 m-0">Trustpilot</p>
              </div>
              <div className="d-flex gap-2 flex-row align-items-center border rounded-3 border-2 border-light px-3 py-1">
                <AiOutlineSafetyCertificate size={24} color="white" />
                <p className="text-light fs-5 m-0">Secure Transfers</p>
              </div>
            </div>
          </section>
        </Col>
        <Col xs={12} sm={6} className="py-4 px-2">
          <section className="bg-light-subtle rounded-4 shadow-sm h-100 py-4 px-3">
            <p>still in progress</p>
          </section>
        </Col>
      </Row>
      <Row>
        <h1></h1>
      </Row>
    </section>
  );
}
