import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function Payments() {
  const handleMakePayment = () => {
    alert("Make payment feature coming soon.");
  };

  return (
    <div>
      <PageTitle
        title="Payments"
        subtitle="Manage membership payments and payment records."
      />

      <Card
        title="Payment Management"
        description="View payment history and manage member payments."
      >
        <p>Payment records will be displayed here.</p>

        <Button onClick={handleMakePayment}>
          Make Payment
        </Button>
      </Card>
    </div>
  );
}

export default Payments;