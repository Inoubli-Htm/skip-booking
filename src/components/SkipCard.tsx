import { Card, Badge, Button } from "react-bootstrap";
import { Skip } from "../types/Skip";
import "../App.css";

type SkipCardProps = {
  skip: Skip;
  selected: boolean;
  onSelect: () => void;
};

export default function SkipCard({ skip, selected, onSelect }: SkipCardProps) {
  return (
    <Card
      onClick={onSelect}
      className={`shadow-sm mb-4 border border-2 rounded-4 overflow-hidden transition 
        ${selected ? "border-primary" : "border-light"} 
        cursor-pointer hover-shadow`}
      style={{ maxWidth: 320 }}
    >
      <Card.Img
        variant="top"
        src="/yarder-skip.jpg"
        alt={`Skip ${skip.size} yards`}
        style={{ height: 180, objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between text-center">
        <Card.Title className="fs-5">Skip {skip.size} yd³</Card.Title>

        <div className="mb-2 text-muted small">
          📆 {skip.hire_period_days} jours de location
        </div>

        <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
          <Badge bg={skip.allowed_on_road ? "success" : "secondary"}>
            {skip.allowed_on_road ? "Autorisé sur route" : "Privé"}
          </Badge>
          {skip.allows_heavy_waste && (
            <Badge bg="warning" text="dark">
              Déchets lourds
            </Badge>
          )}
        </div>

        <div className="fs-5 fw-bold text-primary mb-3">
          {skip.price_before_vat}€ <span className="fs-6 text-muted">HT</span>
        </div>

        <Button
          variant={selected ? "primary" : "outline-primary"}
          onClick={(e) => {
            e.stopPropagation(); // pour éviter de re-cliquer toute la carte
            onSelect();
          }}
        >
          {selected ? "Selected" : "Select this skip"}
        </Button>
      </Card.Body>
    </Card>
  );
}
