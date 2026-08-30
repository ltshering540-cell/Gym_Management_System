# Entity Relationship Diagram (ERD)

## ERD Text Representation
```text
  +------------------+         1 : N         +-------------------+
  |      USERS       | --------------------->|     ATTENDANCE    |
  | (Admin/Trainer/  |                       |  (daily check-in) |
  |     Member)      |                       +-------------------+
  +------------------+
           |
           | 1 : 1 (For Member role)
           v
  +------------------+         N : 1         +-------------------+
  |     MEMBERS      | --------------------->| MEMBERSHIP PLANS  |
  +------------------+                       +-------------------+
    |             | 
    | 1 : N       | 1 : N
    v             v
+----------+  +----------+
| PAYMENTS |  | TRAINERS |
+----------+  +----------+