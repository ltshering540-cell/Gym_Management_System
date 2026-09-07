import { useNavigate } from "react-router-dom";

import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <PageTitle
        title="404 - Page Not Found"
        subtitle="The page you are looking for does not exist."
      />

      <Card
        title="Page Not Found"
        description="Please check the URL or return to the home page."
      >
        <Button onClick={handleGoHome}>
          Go to Home
        </Button>
      </Card>
    </div>
  );
}

export default NotFound;