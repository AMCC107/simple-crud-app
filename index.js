const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});


mongoose.connect(
  "mongodb+srv://andres_db_user:UemzpcJ1BWJvBiID@backenddb.usr4whz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
)
.then(() => {
  console.log("Conectado a MongoDB");
  app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  });
})
.catch((err) => {
  console.error("Error al conectar a MongoDB:", err);
});
