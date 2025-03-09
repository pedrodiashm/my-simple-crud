const express = require("express");
const path = require('path')
const connectdb = require("./config/db");
const userRoutes = require("./routers/UserRoutes");
const logger = require('morgan');
require('dotenv').config();




//criando nossa aplicação
const app = express();

// iniciando mongodb
connectdb();


//possibilita a manipulação de requisições put e post
app.use(express.json());
app.use(express.static('public'))

app.use(logger('dev'));


//rota da API
app.use('/api/users', userRoutes);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/signup.html'))
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))

//middleware para capturar erros
app.use((err, req, res, next) => {
    res.status(500).json({ error: "Erro interno do servidor" });
  });
})
app.listen(process.env.PORT, () => {
    console.log(`eu estou te ouvindo na porta ${process.env.PORT}, amigo!`);    
}); 