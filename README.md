# Capstone: Restaurant Reservation APP

Restaurant Reservation System App.

---
## Link to live application: 
- [Front-end](https://reservation-front.heruku.app/dashboard)

---
## API Routes:
### /reservations route
- get - list of reservations from db
- post - add reservation with body, check for all necessary data
- put - update existing reservation, check for all necessary data
 
### /reservations/:reservation_id route
- put - update existing reservation, check for all necessary data
- get - list specific reservation

### /reservations/:reservation_id/status
- get - list the party size of a reservation
- put - update a reservation's status

### /tables
- get - list of tables from db
- post - add a new table, check for all necessary data

### /tables/:table_id/seat
- put - update table with occupied status
- delete - open up a table after reservation is over

---
## Screenshots:

--- Reservation Dashboard Page

![page1](/front-end/readme-image/reservation-dashboard-page.png)

--- New Reservation Page

![page2](/front-end/readme-image/new-reservation-page.png)

---
## Technologies used:

### Frontend/Client
- React
- HTML
- CSS
- Bootstrap
- Flexbox

### Backend/Server
- Node
- Express
- Knex
- DBeaver
- PostgreSQL 

### Deploymnet 
- Monorepo
- Heruku

---
## Build instructions:
Use the following command to install app : 
```
npm install --legacy-peer-deps
```

---
## Testing instructions:
Use the following command to run all tests :
```
npm run test
```


