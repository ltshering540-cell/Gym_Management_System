import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function MembershipPlans() {
  const handleAddPlan = () => {
    alert("Add membership plan feature coming soon.");
  };

  return (
    <div>
      <PageTitle
        title="Membership Plans"
        subtitle="Manage the membership plans offered by the gym."
      />

      <div className="dashboard-grid">
        <Card
          title="Basic Plan"
          description="Suitable for beginners and casual gym members."
        >
          <h3>₹1,000 per month</h3>

          <Button onClick={() => alert("Basic Plan selected.")}>
            View Plan
          </Button>
        </Card>

        <Card
          title="Standard Plan"
          description="A balanced plan for regular gym members."
        >
          <h3>₹2,000 per month</h3>

          <Button onClick={() => alert("Standard Plan selected.")}>
            View Plan
          </Button>
        </Card>

        <Card
          title="Premium Plan"
          description="Includes additional facilities and services."
        >
          <h3>₹3,000 per month</h3>

          <Button onClick={() => alert("Premium Plan selected.")}>
            View Plan
          </Button>
        </Card>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button onClick={handleAddPlan}>
          Add Membership Plan
        </Button>
      </div>
    </div>
  );
}

export default MembershipPlans;