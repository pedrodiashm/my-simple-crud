const express = require("express");
const connectdb = require("./config/db");
const userRoutes = require("./routers/UserRoutes");
require('dotenv').config();

const app = express();

connectdb();

app.use(express.json());

app.use('/users', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`eu estou te ouvindo na porta ${process.env.PORT}, amigo!`);    
})