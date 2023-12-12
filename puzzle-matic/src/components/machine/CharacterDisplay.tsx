import { Alert, Col, Row } from "react-bootstrap";

export default function CharacterDisplay({
  img,
  speech,
}: {
  img: string;
  speech: string | null;
}) {
  return (
    <>
      <Row>
        <Col xs="9">
          {!!speech && <Alert variant="light">{speech}</Alert>}
        </Col>
        <Col xs="3">
          <img
            className="rounded-circle shadow-4-strong"
            src={img}
            style={{ width: "100%", float: "right" }}
          />
        </Col>
      </Row>
    </>
  );
}
