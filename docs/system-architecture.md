### File 6: `docs/design/system_architecture.md`
```markdown
# System Architecture & Wireframe Layouts

## Architecture Overview
The Gym Management System is built using standard MERN architecture[cite: 1, 2]:
- **Frontend (Client):** React single-page application handling user interfaces and state management[cite: 1, 2].
- **Backend (Server):** Node.js & Express API serving RESTful routes and role authentication[cite: 1, 2].
- **Database:** MongoDB storing documents across collections with relational references[cite: 1].

## Key Page Wireframe Layouts
1. **Login Page:** Centered form container containing email, password, and submit button.
2. **Dashboard Page:** Stat counter widgets at top (Total Members, Active Trainers, Revenue) with quick action buttons below[cite: 4].
3. **List Page:** Filterable datatable displaying records (Members/Trainers) with pagination and inline edit/delete actions[cite: 4].
4. **Form Page (Add/Edit):** Input fields arranged in a two-column grid with Submit and Cancel action triggers[cite: 4].
5. **Profile Page:** Structured overview showing account details, active status badge, and history activity logs[cite: 4].
