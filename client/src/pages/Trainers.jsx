import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function Trainers() {
  const handleAddTrainer = () => {
    alert("Add trainer feature coming soon.");
  };

  return (
    <div>
      <PageTitle
        title="Trainers"
        subtitle="Manage all gym trainers and their information."
      />

      <Card
        title="Trainer Management"
        description="View, add, and manage gym trainer details."
      >
        <p>Trainer information will be displayed here.</p>

        <Button onClick={handleAddTrainer}>
          Add Trainer
        </Button>
      </Card>
    </div>
  );
}

export default Trainers;