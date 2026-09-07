import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function Attendance() {
  const handleMarkAttendance = () => {
    alert("Mark attendance feature coming soon.");
  };

  return (
    <div>
      <PageTitle
        title="Attendance"
        subtitle="Track and manage daily gym attendance."
      />

      <Card
        title="Attendance Management"
        description="Record and view member attendance details."
      >
        <p>Attendance records will be displayed here.</p>

        <Button onClick={handleMarkAttendance}>
          Mark Attendance
        </Button>
      </Card>
    </div>
  );
}

export default Attendance;