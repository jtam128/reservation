# Restaurant Reservation APP

This application has features that allows the user, which are restaurant personnel, to manage reservations made by customers. It opens up to the Dashboard which is where the user can see an overview of reservations from the past, today, and future as well as a section that shows available and occupied tables. Within each reservation detail, there are "Seat", "Edit", and "Cancel" buttons to allow for changes to be made to a reservation, as needed. Other sections of the application allow the user to create reservations, create tables, and search for a reservation by phone number.

---
## User Interface
### Dashboard Page
- There are two sections in this page: a reservation section and a tables section.
- This page shows the user the reservation for the current date. There are also buttons on the top that allow the user to see reservations from the past and future. The user can make changes to a reservation with "Seat", "edit", and "cancel" buttons.
- The user can also see tables that are free or occupied. If a table is occupied, the user can click a "Finish" button to make the table free again.

### Search Page
- Allows the user to search for a reservation by the customer's phone number

### New Reservation Page
- Allows the user to fill in a form to create a new reservation, which will show in the reservation section of the Dashboard page
### New Table Page
- Allows the user to create a new table and it goes back to the Deashboard page, where the new table can be seen.

---
## Link to live application: 
- [Live Link](https://resres-app-client.herokuapp.com)

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


