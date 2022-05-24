const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/users");


const app = express();
const port = process.env.PORT || 3000;

//middleare
app.use(express.json());
app.use('/api', userRoutes)

//ruta
app.get('/', (req,res) =>{
    res.send("Bienvenido a la API");
});

//mongo connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log(error));

app.listen(port, () => console.log('server listening on port ',port));
