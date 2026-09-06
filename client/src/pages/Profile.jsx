import { useState } from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

function Profile() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@gym.com");
  const [phone, setPhone] = useState("+975 17123456");
  const [role, setRole] = useState("Administrator");

  const handleSave = (event) => {
    event.preventDefault();
    alert("Profile updated successfully");
  };

  return (
    <section className="profile-page">
      <h1>Profile</h1>
      <p>View and update your administrator profile details.</p>

      <Card title="Admin Profile">
        <form className="profile-form" onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input id="role" type="text" value={role} readOnly />
          </div>

          <Button type="submit">Save Changes</Button>
        </form>
      </Card>
    </section>
  );
}

export default Profile;