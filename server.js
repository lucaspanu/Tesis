const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");

//Config .env to ./config/config.ev
require("dotenv").config({
  path: "./config/config.env",
});

const app = express();

// Connect to database
connectDB();

//Use bodyParse
app.use(bodyParser.json());

//config for only development
// Dev Logginf Middleware
if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );

  app.use(morgan("dev"));
  //morgan give information about each request
  //cors its allow to deal with react for localhost at port 3000 without any problem
}

// Load routes
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const adminRouter = require("./routes/admin.route");
const cursosRouter = require("./routes/cursos.route");
const inscripcionesRouter = require("./routes/inscripciones.route");
const perfilRouter = require("./routes/perfil.route");

// Use Routes
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", adminRouter);
app.use("/api", cursosRouter);
app.use("/api", inscripcionesRouter);
app.use("/api", perfilRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    msg: "Page not founded",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
