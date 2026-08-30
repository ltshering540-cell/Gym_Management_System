### File 3: `docs/design/database_design.md`
```markdown
# MongoDB Collection Design

## 1. `users` Collection
- `_id`: ObjectId
- `name`: String
- `email`: String
- `password`: String (Hashed)
- `role`: String (Admin | Trainer | Member)
- `createdAt`: Date

## 2. `members` Collection
- `_id`: ObjectId
- `userId`: ObjectId (ref: users)
- `phone`: String
- `address`: String
- `membershipPlanId`: ObjectId (ref: membership_plans)
- `trainerId`: ObjectId (ref: trainers)
- `startDate`: Date
- `endDate`: Date
- `status`: String (Active | Expired)

## 3. `trainers` Collection
- `_id`: ObjectId
- `userId`: ObjectId (ref: users)
- `specialization`: String
- `phone`: String
- `assignedMembers`: Array of ObjectIds (ref: members)

## 4. `membership_plans` Collection
- `_id`: ObjectId
- `planName`: String
- `durationMonths`: Number
- `price`: Number
- `description`: String

## 5. `attendance` Collection
- `_id`: ObjectId
- `memberId`: ObjectId (ref: members)
- `date`: Date
- `status`: String (Present | Absent)

## 6. `payments` Collection
- `_id`: ObjectId
- `memberId`: ObjectId (ref: members)
- `planId`: ObjectId (ref: membership_plans)
- `amountPaid`: Number
- `paymentDate`: Date
- `paymentStatus`: String (Completed | Pending)
