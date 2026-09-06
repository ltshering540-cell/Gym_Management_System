import { useState } from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

function Members() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Karma Wangchuk",
      email: "karma@example.com",
      plan: "Monthly",
      status: "Active",
    },
    {
      id: 2,
      name: "Pema Choden",
      email: "pema@example.com",
      plan: "Quarterly",
      status: "Active",
    },
    {
      id: 3,
      name: "Sonam Dorji",
      email: "sonam@example.com",
      plan: "Yearly",
      status: "Inactive",
    },
  ]);

  const handleAddMember = () => {
    const newMember = {
      id: members.length + 1,
      name: `New Member ${members.length + 1}`,
      email: `member${members.length + 1}@example.com`,
      plan: "Monthly",
      status: "Active",
    };

    setMembers([...members, newMember]);
  };

  return (
    <section className="members-page">
      <h1>Members</h1>
      <p>Manage gym members and their membership details.</p>

      <Card title="Member Management">
        <Button onClick={handleAddMember}>Add Member</Button>

        <div className="members-table-wrapper">
          <table className="members-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Plan</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.plan}</td>
                  <td>{member.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

export default Members;