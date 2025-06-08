import { Button } from "react-bootstrap";
import { Skip } from "../types/Skip";

interface Props {
  selectedSkip: Skip | undefined;
  onContinue: () => void;
}

export default function BottomBar({ selectedSkip, onContinue }: Props) {
  if (!selectedSkip) return null;

  return (
    <div
      className="position-fixed bottom-0 start-0 end-0 bg-dark text-white d-flex justify-content-between align-items-center px-4 py-3 shadow-lg"
      style={{ zIndex: 1000 }}
    >
      <div>
        <strong>{selectedSkip.size} Yard Skip</strong> — £
        {selectedSkip.price_before_vat} ({selectedSkip.hire_period_days} day
        hire)
      </div>
      <Button variant="primary" onClick={onContinue}>
        Continue →
      </Button>
    </div>
  );
}
