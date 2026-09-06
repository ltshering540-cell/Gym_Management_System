import { useState } from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

function Attendance() {
  const [attendance, setAttendance] = useState([
    {
      id: 1,
      member: "Karma Wangchuk",
      date: "2026-09-06",
      checkIn: "08:30 AM",
      checkOut: "10:00 AM",
      status: "Present",
    },
    {
      id: 2,
      member: "Pema Choden",
      date: "2026-09-06",
      checkIn: "09:15 AM",
      checkOut: "10:45 AM",
      status: "Present",
    },
    {
      id: 3,
      member: "Sonam Dorji",
      date: "2026-09-06",
      checkIn: "-",
      checkOut: "-",
      status: "Absent",
    },
  ]);

  const handleMarkAttendance = () => {
    const newRecord = {
      id: attendance.length + 1,
      member: `New Member ${attendance.length + 1}`,
      date: "2026-09-06",
      checkIn: "10:00 AM",
      checkOut: "-",
      status: "Present",
    };

    setAttendance([...attendance, newRecord]);
  };

  return (
    <section className="attendance-page">
      <h1>Attendance</h1>
      <p>Track daily gym attendance and member check-in details.</p>

      <Card title="Attendance Management">
        <Button onClick={handleMarkAttendance}>
          Mark Attendance
        </Button>

        <div className="attendance-table-wrapper">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Date</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {attendance.map((record) => (
                <tr key={record.id}>
                  <td>{record.member}</td>
                  <td>{record.date}</td>
                  <td>{record.checkIn}</td>
                  <td>{record.checkOut}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}

export default Attendance;