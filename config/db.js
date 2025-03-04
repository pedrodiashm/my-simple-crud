const mongoose = require('mongoose');
require('dotenv').config();

// ./config/db recebe a conexão com o banco de dados e sera exportado para server.js

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('📦 MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1); 
  }
};

module.exports = connectDB;
