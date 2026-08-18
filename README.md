# Gym Management System

## Project Overview
The Gym Management System is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application designed to digitalize and streamline gym management operations. It simplifies administrative tracking of members, trainers, subscription plans, and attendance[cite: 3].

## Technology Stack
- **Frontend:** React.js[cite: 2]
- **Backend:** Node.js & Express.js[cite: 2]
- **Database:** MongoDB (Community / Atlas)[cite: 2]
- **Version Control:** Git & GitHub[cite: 2]

## Project Structure
```text
Gym_Management_System/
├── client/
├── server/
├── docs/
├── README.md
└── .gitignore

# Requirement Analysis Document

## 1. Functional Requirements
- **FR-01: Authentication:** System shall allow Admin and Users to log in securely with email and password[cite: 3].
- **FR-02: Member Profile Management:** System shall allow authorized users to add, edit, search, and soft-delete member profiles[cite: 3].
- **FR-03: Plan Management:** System shall enable administrators to define membership tiers (e.g., Monthly, Quarterly, Annual)[cite: 3].
- **FR-04: Trainer Mapping:** System shall allow assigning members to specific trainers[cite: 3].
- **FR-05: System Analytics:** System dashboard shall present counts of active members, expiring memberships, and total staff[cite: 3].

## 2. Non-Functional Requirements
- **NFR-01: Security:** User passwords must be hashed prior to storage, and endpoints must be protected[cite: 3].
- **NFR-02: Usability:** The user interface should be clear and usable with minimal technical training[cite: 3].
- **NFR-03: Performance:** Page loads and API search responses should render under 2 seconds[cite: 3].
- **NFR-04: Reliability:** Database records must persist accurately without data loss[cite: 3].
- **NFR-05: Maintainability:** Application architecture must follow modular folder separation (`client/` and `server/`).