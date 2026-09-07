import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function Home() {
  return (
    <div>
      <PageTitle
        title="Welcome to Gym Management System"
        subtitle="Manage your gym activities easily and efficiently."
      />

      <Card
        title="Get Started"
        description="Use the navigation menu to manage members, trainers, payments, and attendance."
      >
        <Button
          onClick={() => alert("Welcome to the Gym Management System!")}
        >
          Get Started
        </Button>
      </Card>
    </div>
  );
}

export default Home;