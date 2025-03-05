const express = require("express");
const path = require('path')
const connectdb = require("./config/db");
const userRoutes = require("./routers/UserRoutes");




require('dotenv').config();

//criando nossa aplicação
const app = express();

// iniciando mongodb
connectdb();


//possibilita a manipulação de requisições put e post
app.use(express.json());
app.use('/api/users', userRoutes);
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`eu estou te ouvindo na porta ${process.env.PORT}, amigo!`);    
})