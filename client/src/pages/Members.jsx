import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function Members() {
  const handleAddMember = () => {
    alert("Add member feature coming soon.");
  };

  return (
    <div>
      <PageTitle
        title="Members"
        subtitle="Manage all registered gym members."
      />

      <Card
        title="Member Management"
        description="Add, update, and view gym member information."
      >
        <p>Member information will be displayed here.</p>

        <Button onClick={handleAddMember}>
          Add Member
        </Button>
      </Card>
    </div>
  );
}

export default Members;