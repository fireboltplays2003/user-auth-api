## 📘 Task3: User Authentication System (Node.js + MySQL)

A basic Node.js Express application that provides user **registration** and **login authentication** using a **MySQL database** and `bcrypt` for password hashing.

---

## 📁 Project Structure

```bash
Task3/
│
├── app.js                     # Main Express server setup
├── dbSingleton.js            # MySQL connection singleton
├── db_user.sql               # SQL script for creating the user database and table
├── routes/
│   ├── users.js              # User registration route
│   └── Authentication.js     # Login/authentication route
├── package.json              # Project dependencies
└── package-lock.json         # NPM lock file
```

---

## ⚙️ Installation & Setup

1. **Clone the project**

   ```bash
   git clone <your-repo-url>
   cd Task3
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create the database**
   Import the SQL file:

   ```bash
   mysql -u root -p < db_user.sql
   ```

4. **Start the server**

   ```bash
   node app.js
   ```

---

## ✅ Routes & Functionality

### 1. **Register a new user**

* **POST** `/users`
* **Body** (JSON):

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

* 💡 Password is hashed using `bcrypt` before being saved to the DB.

---

### 2. **User login**

* **POST** `/auth`
* **Body** (JSON):

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

* ✅ Compares the entered password with the hashed one using `bcrypt.compare`.
* Returns:

  * `200 OK` – if login successful
  * `401 Unauthorized` – if wrong email or password

---

## 🔐 Password Handling

* Uses `bcrypt.genSalt` and `bcrypt.hash` during registration.
* Passwords are **never stored in plain text**.
* During login, `bcrypt.compare` ensures secure matching.

---

## 💾 Database Schema

**Database:** `user_db`
**Table:** `users`

```sql
CREATE TABLE users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

## 🧪 Testing with Postman

Use the following examples in Postman:

* Register: `POST http://localhost:3000/users`
* Login: `POST http://localhost:3000/auth`

Set header:

```json
Content-Type: application/json
```

---

## 📦 Dependencies

From `package.json`:

```json
"express": "^5.1.0",
"mysql2": "^3.14.1",
"bcrypt": "^6.0.0"
```

---

## 👨‍💻 Developers

* **Stephanos Khoury**
* **Rula Yosef**

---

Would you like me to export this into a downloadable `README.md` file?
