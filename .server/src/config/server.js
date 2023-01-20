const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });


const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("../routes/users")
const authRoutes = require("../routes/auth")
const teamRoutes = require("../routes/team")
const playersRoutes = require("../routes/players")
const playerseasonstatsRoutes = require("../routes/playerseasonstats")
const standingsRoutes = require("../routes/standings")
const teamseasonstatsRoutes = require("../routes/teamseasonstats")

const port = process.env.PORT || 8080;

//database connection
connection();


//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/players", playersRoutes);
app.use("/api/v1/playerseasonstats", playerseasonstatsRoutes);
app.use("/api/v1/standings", standingsRoutes)
app.use("/api/v1/teams", teamRoutes);
app.use("/api/v1/teamseasonstats", teamseasonstatsRoutes);


//get
app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
)

app.listen(port,() => console.log(`Listening on port ${port}...`));