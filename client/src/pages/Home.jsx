import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home-page">
      <h1>Welcome to the Gym Management System</h1>

      <p>
        Manage members, trainers, attendance, membership plans, and payments
        in one place.
      </p>

      <Button onClick={() => navigate("/login")}>
        Login
      </Button>
    </section>
  );
}

export default Home;