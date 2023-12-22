import { Alert, Col, Row } from "react-bootstrap";
import { Character } from "../game/GameData";

export default function CharacterDisplay({
  character,
  speech,
}: {
  character: Character,
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
            src={character.image}
            alt={character.name}
            style={{ width: "100%", float: "right" }}
          />
        </Col>
      </Row>
    </>
  );
}
