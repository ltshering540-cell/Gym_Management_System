import { useState } from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

function Trainers() {
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: "Tashi Dorji",
      specialty: "Strength Training",
      experience: "5 years",
      status: "Available",
    },
    {
      id: 2,
      name: "Pema Wangmo",
      specialty: "Yoga and Fitness",
      experience: "3 years",
      status: "Available",
    },
    {
      id: 3,
      name: "Sonam Tshering",
      specialty: "Cardio Training",
      experience: "4 years",
      status: "Unavailable",
    },
  ]);

  const handleAddTrainer = () => {
    const newTrainer = {
      id: trainers.length + 1,
      name: `New Trainer ${trainers.length + 1}`,
      specialty: "General Fitness",
      experience: "1 year",
      status: "Available",
    };

    setTrainers([...trainers, newTrainer]);
  };

  return (
    <section className="trainers-page">
      <h1>Trainers</h1>
      <p>Manage gym trainers and their assigned specialties.</p>

      <Card title="Trainer Management">
        <Button onClick={handleAddTrainer}>Add Trainer</Button>

        <div className="trainers-table-wrapper">
          <table className="trainers-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Specialty</th>
                <th>Experience</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {trainers.map((trainer) => (
                <tr key={trainer.id}>
                  <td>{trainer.name}</td>
                  <td>{trainer.specialty}</td>
                  <td>{trainer.experience}</td>
                  <td>{trainer.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

export default Trainers;