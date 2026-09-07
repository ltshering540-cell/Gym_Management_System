import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function Profile() {
  return (
    <div>
      <PageTitle
        title="Profile"
        subtitle="View and manage your administrator profile."
      />

      <Card
        title="Admin Profile"
        description="Your account information"
      >
        <p>
          <strong>Name:</strong> Admin
        </p>

        <p>
          <strong>Role:</strong> Administrator
        </p>

        <p>
          <strong>Email:</strong> admin@gym.com
        </p>

        <Button
          onClick={() => alert("Edit profile feature coming soon.")}
        >
          Edit Profile
        </Button>
      </Card>
    </div>
  );
}

export default Profile;