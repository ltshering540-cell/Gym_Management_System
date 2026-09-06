import Card from "../components/common/Card";
import Button from "../components/common/Button";

function Dashboard() {
  const handleRefresh = () => {
    alert("Dashboard refreshed successfully");
  };

  return (
    <section className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Welcome to the Gym Management System.</p>

      <div className="dashboard-cards">
        <Card title="Total Members">
          <h2>250</h2>
        </Card>

        <Card title="Active Plans">
          <h2>180</h2>
        </Card>

        <Card title="Total Trainers">
          <h2>12</h2>
        </Card>

        <Card title="Today's Attendance">
          <h2>95</h2>
        </Card>
      </div>

      <Button onClick={handleRefresh}>
        Refresh Dashboard
      </Button>
    </section>
  );
}

export default Dashboard;