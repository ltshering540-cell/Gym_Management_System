import { useState } from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

function MembershipPlans() {
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Monthly Plan",
      duration: "1 Month",
      price: "Nu. 1,500",
      benefits: "Gym access and basic equipment",
    },
    {
      id: 2,
      name: "Quarterly Plan",
      duration: "3 Months",
      price: "Nu. 4,000",
      benefits: "Gym access and trainer guidance",
    },
    {
      id: 3,
      name: "Yearly Plan",
      duration: "12 Months",
      price: "Nu. 12,000",
      benefits: "Full gym access and personal training",
    },
  ]);

  const handleAddPlan = () => {
    const newPlan = {
      id: plans.length + 1,
      name: `New Plan ${plans.length + 1}`,
      duration: "1 Month",
      price: "Nu. 1,000",
      benefits: "Basic gym access",
    };

    setPlans([...plans, newPlan]);
  };

  return (
    <section className="membership-plans-page">
      <h1>Membership Plans</h1>
      <p>Manage gym membership plans and their pricing details.</p>

      <Card title="Membership Plan Management">
        <Button onClick={handleAddPlan}>Add Plan</Button>

        <div className="plans-table-wrapper">
          <table className="plans-table">
            <thead>
              <tr>
                <th>Plan Name</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Benefits</th>
              </tr>
            </thead>

            <tbody>
              {plans.map((plan) => (
                <tr key={plan.id}>
                  <td>{plan.name}</td>
                  <td>{plan.duration}</td>
                  <td>{plan.price}</td>
                  <td>{plan.benefits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

export default MembershipPlans;