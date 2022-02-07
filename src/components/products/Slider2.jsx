import React, { useState, useEffect } from "react";
import { CardImg, CardText, Row } from "reactstrap";

function Slider2({ imageData }) {
  const [current, SetCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hello");
      if (current < imageData.length - 1) {
        SetCurrent((current) => current + 1);
      } else {
        SetCurrent(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [current, imageData.length]);

  return (
    <div>
      {imageData.map((slide, index) => {
        return (
          <div key={index} className="">
            {index === current && (
              <Row>
                <CardImg
                  src={slide._image}
                  alt=""
                  className="shadow rounded"
                  style={{ width: "250px" }}
                />
                <CardText>{"Fiyat : " + " 28 "}</CardText>
              </Row>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider2;
