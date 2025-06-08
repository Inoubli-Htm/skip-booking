import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import SkipCard from "./components/SkipCard";
import { Skip } from "./types/Skip";
import ProgressBar from "./components/ProgressBar";
import "./App.css";
import BottomBar from "./components/BottomBar";
export default function App() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const res = await axios.get(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        setSkips(res.data);
      } catch (err) {
        console.error("Erreur lors du chargement des skips :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSelect = (id: number) => {
    setSelectedSkipId((prev) => (prev === id ? null : id));
  };

  return (
    <Container className="py-5">
      <ProgressBar currentStep={2} />
      <h1 className="text-center mb-4">Choose Your Skip Size</h1>
      <h6 className="text-center mb-4">
        Select the skip size that best suits your needs
      </h6>

      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          {skips.map((skip) => (
            <Col key={skip.id} xs={12} md={6} lg={4} className="mb-4">
              <SkipCard
                skip={skip}
                selected={selectedSkipId === skip.id}
                onSelect={() => handleSelect(skip.id)}
              />
            </Col>
          ))}
        </Row>
      )}

      <BottomBar
        selectedSkip={skips.find((s) => s.id === selectedSkipId)}
        onContinue={() => alert("Skip sélectionné : " + selectedSkipId)}
      />
    </Container>
  );
}
