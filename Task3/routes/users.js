const express = require("express");
const router = express.Router();
const dbSingleton = require("../dbSingleton");
const bcrypt = require("bcrypt");
const db = dbSingleton.getConnection();

router.get("/", (req, res) => {
  const strQuery = "SELECT * FROM users";
  db.query(strQuery, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

bcrypt.genSalt(10, (err, salt) => {
  if (err)
    return res.status(500).send("Something went wrong");
  bcrypt.hash(password, salt, (err, hashedPassword) => {
    if (err)
      return res.status(500).send("Something went wrong");
  db.query(query, [name, email, hashedPassword], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ message: "User added!", id: results.insertId });
  });
});
});

});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const query =
    "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).send("Something went wrong");

    bcrypt.hash(password, salt, (err, hashedPassword) => {
      if (err) return res.status(500).send("Something went wrong");

      db.query(query, [name, email, hashedPassword, id], (err, results) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        res.json({ message: "User updated!" });
      });
    });
  });
});
// /routes/user.js
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM users WHERE id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ message: "User deleted!" });
  });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM users WHERE id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ message: "User deleted!" });
  });
});

module.exports = router;
