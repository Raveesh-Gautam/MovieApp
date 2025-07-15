import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardAbout() {
  return (
    <Card style={{ width: "100%", backgroundColor: "gray", height: "10rem" }}>
      <Card.Body>
        <Card.Title
          className="d-flex justify-content-center text-white fw-bold"
          style={{
            fontSize: "6rem",
            lineHeight: "7rem",
            height: "7rem",
          }}
        >
          The Generics
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardAbout;
