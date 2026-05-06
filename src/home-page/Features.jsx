import { Row, Col, Card } from "react-bootstrap";

const Features = () => {
  const data = [
    "Free Shipping",
    "Great Support 24/7",
    "100% Secure Payment",
    "Money-Back Guarantee",
  ];

  return (
    <Row className="mt-4 text-center">
      {data.map((item, index) => (
        <Col md={3} key={index}>
          <Card className="p-3">
            <Card.Body>
              <div className="mb-2 text-success">✔</div>
              <Card.Title>{item}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Features;