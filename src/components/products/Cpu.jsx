import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import productService from "/Users/mayta/Desktop/bootstrap/src/service/productsService";

function Cpu() {
  const service = new productService();
  const data = service.load("cpu");

  return (
    <div className="my-5">
      <Container className="rounded bg-body px-4 shadow">
        <Row>
          <h2 className="my-3">İşlemci</h2>
          <hr />
        </Row>
        <Row>
          <CardGroup className="my-2">
            {data.map((product) => {
              return (
                <Card key={product.id} className="m-1 border-0">
                  <CardImg
                    top
                    style={({ width: "250px" }, { marginTop: "15px" })}
                    src={product.url}
                  />
                  <CardBody>
                    <CardTitle>{product.title} </CardTitle>
                  </CardBody>
                  <Container className="mb-4 mt-2">
                    <Row>
                      <Col>
                        <span className="me-2 text-danger text-decoration-underline fw-bold">
                          {product.unitPrice}
                        </span>
                        <Button className="ms-2">Satın al</Button>
                      </Col>
                    </Row>
                  </Container>
                </Card>
              );
            })}
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
}

export default Cpu;
