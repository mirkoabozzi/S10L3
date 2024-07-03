import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1>404 Pagina Non Trovata</h1>
      <Button variant="light" onClick={() => navigate("/")}>
        Torna alla Home
      </Button>
    </div>
  );
};
export default NotFound;
