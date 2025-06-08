import { Nav } from "react-bootstrap";

const steps = [
  { label: "Postcode", icon: "bi-geo-alt" },
  { label: "Waste Type", icon: "bi-trash" },
  { label: "Select Skip", icon: "bi-truck" },
  { label: "Permit Check", icon: "bi-shield-check" },
  { label: "Choose Date", icon: "bi-calendar" },
  { label: "Payment", icon: "bi-credit-card" },
];

export default function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <Nav className="justify-content-center mb-4 gap-2" variant="pills">
      {steps.map((step, index) => (
        <Nav.Item key={index}>
          <Nav.Link
            active={index === currentStep}
            disabled={index > currentStep}
          >
            <i className={`bi ${step.icon} me-2`}></i>
            {step.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
