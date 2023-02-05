const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const db = require("./schema");

const userRoutes = require("./routes/userRoutes");

db.sequelize
  .sync()
  // .sync({ force: true })
  .then(() => {
    console.log("Connect to database");
  })
  .catch((err) => {
    console.log("Rejected", err);
  });

app.use("/api/v1", userRoutes);

app.listen(port, () => {
  console.log("Server is running at", port);
});
