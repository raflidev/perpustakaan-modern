# perpustakaan-modern
Perpustakaan berbasis digital.

## Installation
1. Clone the repo
   ```sh
   git clone https://github.com/raflidev/perpustakaan-modern.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start at localhost
   ```sh
   npm run dev
   ```
4. Build for production and launch server
   ```sh
   npm run start
   ```
   
## API Documentation
__Api Path__ : https://perpus-modern.herokuapp.com/api/ <br>
__API Version__ : v1

| Endpoint                 |   Params      | Method      |                      Req Body                     | Description |
| ------------------------ | ------------- | ----------- | ------------------------------------------------- | ------------- |
| /user                    |      -        | GET         |     -                                             |  Get User   |
| /user/:id                |      id       | GET         |    -                                              |  Get User by ID   |
| /user                    |      -        | POST        | username, full_name, email, valid, password, role |  Add User   |
| /user/:id                |      id       | PUT         | username, full_name, email, valid, password, role |  Update User |
| /user/:id                |      id       | DELETE      |     -                                             |  Remove User |
| /book                    |      -        | GET         |     -                                             |  Get Book   |
| /book/:id                |      id       | GET         |    -                                              |  Get Book by ID   |
| /book                    |      -        | POST        | name, author                                      |  Add Book   |
| /book/:id                |      id       | PUT         | name, author                                      |  Update Book |
| /book/:id                |      id       | DELETE      |     -                                             |  Remove Book |
| /history                 |      -        | GET         |    -                                              |  Get History   |
| /history/:id             |      id       | GET         |     -                                             |  Get History by ID   |
| /history/user/:id        |      id       | GET         |     -                                             |  Get All Specific User History by ID   |
| /history                 |      -        | POST        | user_id, book_id, borrow, finishBorrow            |  Add History   |
| /history/:id             |      id       | PUT         | user_id, book_id, borrow, finishBorrow            |  Update History |
| /history/:id             |      id       | DELETE      |     -                                             |  Remove History |
| /borrow                  |      -        | GET         |     -                                             |  Get Borrow   |
| /borrow/:id              |      id       | GET         |     -                                             |  Get Borrow by ID   |
| /borrow/user/:id         |      id       | GET         |     -                                             |  Get All Specific User Borrow by ID   |
| /borrow/:book/user/:user |   book, user  | GET         |                                                   |  Get All Specific User Borrow by USER ID & Book ID   |
| /borrow                  |      -        | POST        | user_id, book_id                                  |  Add Borrow   |
| /borrow/:id              |      id       | PUT         | user_id, book_id                                  |  Update Borrow |
| /borrow/:id              |      id       | DELETE      |    -                                              |  Remove Borrow |
| /login                   |      -        | POST        | email, password                                   |  User Login |
| /veriftoken              |      -        | POST        | email, password                                   |  Verfication JWT Auth |
