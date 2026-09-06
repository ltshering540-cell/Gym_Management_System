import { useState } from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

function Payments() {
  const [payments, setPayments] = useState([
    {
      id: 1,
      member: "Karma Wangchuk",
      date: "2026-09-06",
      amount: "Nu. 1,500",
      method: "Cash",
      status: "Paid",
    },
    {
      id: 2,
      member: "Pema Choden",
      date: "2026-09-05",
      amount: "Nu. 4,000",
      method: "Bank Transfer",
      status: "Paid",
    },
    {
      id: 3,
      member: "Sonam Dorji",
      date: "2026-09-04",
      amount: "Nu. 1,500",
      method: "Cash",
      status: "Pending",
    },
  ]);

  const handleAddPayment = () => {
    const newPayment = {
      id: payments.length + 1,
      member: `New Member ${payments.length + 1}`,
      date: "2026-09-06",
      amount: "Nu. 1,500",
      method: "Cash",
      status: "Paid",
    };

    setPayments([...payments, newPayment]);
  };

  return (
    <section className="payments-page">
      <h1>Payments</h1>
      <p>Manage membership payments and payment records.</p>

      <Card title="Payment Management">
        <Button onClick={handleAddPayment}>Add Payment</Button>

        <div className="payments-table-wrapper">
          <table className="payments-table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.member}</td>
                  <td>{payment.date}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.method}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

export default Payments;