var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var database = require("./config/database");
var auth = require("./auth/main_auth");
var cors = require("cors");

//importación rutas
var empleadosRouter = require("./routes/empleados.router");
var clienteRouter = require("./routes/Cliente.router");
var vehiculoRouter = require("./routes/Vehiculo.router");
var servicioRouter = require("./routes/Servicio.router");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//Mongo coneection
database.mongoConnect();

//Router - publicas
app.use("/empleados", empleadosRouter);
app.use("/cliente", clienteRouter);

//De esta manera los clientes o empleados se pueden loguear sin requerir un token
//app.use(auth);

//Router - privadas
app.use("/vehiculo", vehiculoRouter);
app.use("/servicio", servicioRouter);

//De esta manera se puede hacer peticiones a rutas privadas sin requerir un token
app.use(auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});




module.exports = app;
