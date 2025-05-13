const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/Authentication");
const port = 3000;

app.use(express.json());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
