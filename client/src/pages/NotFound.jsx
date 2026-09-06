import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found-page">
      <h1>404 - Page Not Found</h1>

      <p>
        The page you are looking for does not exist.
      </p>

      <Button onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </Button>
    </section>
  );
}

export default NotFound;