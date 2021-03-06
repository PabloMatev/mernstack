const express = require("express");
const connectDB = require("./db");

const app = express();
connectDB();

app.get("/", (req, res) => res.send("Api running"));

//Define route

app.use("/api/users", require("../../routes/api/users"));
app.use("/api/auth", require("../../routes/api/auth"));
app.use("/api/profile", require("../../routes/api/profile"));
app.use("/api/posts", require("../../routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
