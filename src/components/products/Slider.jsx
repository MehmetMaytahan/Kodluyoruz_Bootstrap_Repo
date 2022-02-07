import React, { useState, useEffect } from "react";

import { Col, Row } from "reactstrap";
import Slider2 from "./Slider2";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current < slides.length - 1) {
        setCurrent((current) => current + 1);
      } else {
        setCurrent(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [current, slides.length]);

  const handleData = () => {
    console.log(`${current} numaralı görsel `);
  };
  return (
    <div>
      <Row>
        <Col>
          {slides.map((slide, index) => {
            return (
              <div key={index}>
                {index === current && (
                  <img
                    src={slide.image}
                    alt=""
                    className="shadow rounded"
                    onClick={handleData}
                  />
                )}
              </div>
            );
          })}
        </Col>
        <Col className="bg-danger shadow rounded">
          <Row>
            <Slider2 imageData={slides} />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Slider;
