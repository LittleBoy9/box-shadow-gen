import React, { useState } from "react";

import { Row, Col, Container, Alert } from "react-bootstrap";

import "./css/Generator.css";
const Generator = () => {
  const [hori, set_hori] = useState(15);
  const [vart, set_vart] = useState(15);
  const [blur, set_blur] = useState(10);
  const [color, set_color] = useState("#2b2b2b");
  const [checkOn, set_checkOn] = useState(false);
  return (
    <>
      <Container fluid className="main_container">
        <h1 className="text-center">Box-Shadow Generator</h1>
        <div className="css_text">
          <Alert variant="success">
            box-shadow :{" "}
            <b>{`${checkOn ? "inset" : ""} ${hori}px ${vart}px ${blur}px ${color}`}</b>
            
          </Alert>
        </div>

        <Row className="main_row">
          <Col sm={12} lg={6} className="output">
            <div
              className="box"
              style={{
                boxShadow: `${
                  checkOn ? "inset" : ""
                } ${hori}px ${vart}px ${blur}px ${color}`,
              }}
            ></div>
          </Col>
          <Col sm={12} lg={6} className="control">
            <label htmlFor="horizontal">Horizontal Length</label>
            <span className="chip">{hori}</span>
            <input
              type="range"
              id="horizontal"
              min="-100"
              max="100"
              value={hori}
              onChange={(e) => set_hori(e.target.value)}
            />
            <hr />

            <label htmlFor="vertical">Vertical Length</label>
            <span className="chip">{vart}</span>
            <input
              type="range"
              id="vertical"
              min="-100"
              max="100"
              value={vart}
              onChange={(e) => set_vart(e.target.value)}
            />
            <hr />

            <label htmlFor="blur">Blur</label>
            <span className="chip">{blur}</span>
            <input
              type="range"
              id="blur"
              min="0"
              max="100"
              value={blur}
              onChange={(e) => set_blur(e.target.value)}
            />
            <hr />

            <label htmlFor="color">Color</label>
            <span className="chip color_chip">{color}</span>
            <input
              type="color"
              id="color"
              value={color}
              onChange={(e) => set_color(e.target.value)}
            />
            <hr />

            <div className="switch">
              <label>
                Outline
                <input
                  type="checkbox"
                  checked={checkOn}
                  onChange={() => set_checkOn(!checkOn)}
                />
                <span className="lever"></span>
                Inset
              </label>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Generator;
