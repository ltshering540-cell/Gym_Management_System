import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";

function Dashboard() {
  return (
    <div>
      <PageTitle
        title="Dashboard"
        subtitle="Overview of your gym management system."
      />

      <div className="dashboard-grid">
        <Card title="Total Members" description="Currently registered members">
          <h2>120</h2>
        </Card>

        <Card title="Active Trainers" description="Available gym trainers">
          <h2>8</h2>
        </Card>

        <Card title="Membership Plans" description="Available membership plans">
          <h2>5</h2>
        </Card>

        <Card title="Monthly Payments" description="Payments received this month">
          <h2>₹25,000</h2>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;