import { useState } from "react";

import PageTitle from "../components/ui/PageTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Welcome from "../components/ui/Welcome";

function Dashboard() {
  const [notificationCount, setNotificationCount] = useState(0);
  const [memberName, setMemberName] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleIncreaseNotifications = () => {
    setNotificationCount(notificationCount + 1);
  };

  const handleResetNotifications = () => {
    setNotificationCount(0);
  };

  const handleToggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <PageTitle
        title="Dashboard"
        subtitle="Overview of your gym management system."
      />

      <Welcome
        userName="Admin"
        projectName="Gym Management System"
      />

      <div className="dashboard-grid">
        <Card
          title="Total Members"
          description="Currently registered members"
        >
          <h2>120</h2>
        </Card>

        <Card
          title="Active Trainers"
          description="Available gym trainers"
        >
          <h2>8</h2>
        </Card>

        <Card
          title="Membership Plans"
          description="Available membership plans"
        >
          <h2>5</h2>
        </Card>

        <Card
          title="Monthly Payments"
          description="Payments received this month"
        >
          <h2>₹25,000</h2>
        </Card>
      </div>

      <div className="sprint9-section">
        <Card
          title="Notification Counter"
          description="This value changes using React State."
        >
          <h2>{notificationCount}</h2>

          <div className="button-group">
            <Button onClick={handleIncreaseNotifications}>
              Increase
            </Button>

            <Button onClick={handleResetNotifications}>
              Reset
            </Button>
          </div>
        </Card>

        <Card
          title="Member Name Input"
          description="Type a name to update the message."
        >
          <input
            type="text"
            value={memberName}
            onChange={(event) => setMemberName(event.target.value)}
            placeholder="Enter member name"
            className="state-input"
          />

          <p>
            {memberName
              ? `Member name: ${memberName}`
              : "No member name entered yet."}
          </p>
        </Card>

        <Card
          title="Conditional Rendering"
          description="Click the button to show or hide a message."
        >
          <Button onClick={handleToggleMessage}>
            {showMessage ? "Hide Message" : "Show Message"}
          </Button>

          {showMessage && (
            <p className="conditional-message">
              The message is currently visible.
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;