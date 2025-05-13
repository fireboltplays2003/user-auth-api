const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const dbSingleton = require("../dbSingleton");
const db = dbSingleton.getConnection();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], (err, results) => {
    if (err) return res.status(500).send("Database error");

    if (results.length === 0) {
      return res.status(401).send("Login failed: email not found");
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).send("Error checking password");

      if (isMatch) {
        res.send("Login successful");
      } else {
        res.status(401).send("Login failed: incorrect password");
      }
    });
  });
});

module.exports = router;
