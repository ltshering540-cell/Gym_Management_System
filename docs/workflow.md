### File 5: `docs/design/workflow.md`
```markdown
# Application Workflow

## General User Interaction Workflow
```text
1. User Accesses Login Page
   ↓
2. Enters Credentials & Requests Login (JWT Authenticated)
   ↓
3. Role Verification (Admin / Trainer / Member)
   ↓
4. System Renders Role Dashboard
   ↓
5. User Selects Module (e.g., Add Member / Record Attendance)
   ↓
6. Action Triggers REST API Request to Express Server
   ↓
7. Express Executes Controller & Updates MongoDB Database
   ↓
8. Backend Sends JSON Response (Success / Failure)
   ↓
9. React UI Displays Toast Message & Updates Visual State