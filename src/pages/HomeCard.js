import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HomeCard() {
  return (
    <Card style={{ width: "100%", backgroundColor: "gray", height: "20rem" }}>
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
        <div className="d-flex justify-content-center my-4">
          <Button className="fw-bold text-white px-4 py-2 border border-white bg-secondary border-info">
            Get our Latest Albums
          </Button>
        </div>
        <div className="d-flex justify-content-center my-4">
          <Button
            className="fw-bold text-info px-4 py-2 border rounded-circle  border-info  bg-secondary border-info"
            style={{ width: "60px", height: "60px", fontSize: "25px" }}
          >
            ►
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
