const User = require('../models/User');

const createUser = async (req, res) => {
    try {
      const { name, email, password} = req.body;
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  };

async function getUsers(req, res){
    try {
        const users = await User.find();
        res.json(users);
    } catch {
        res.status(500).json({error: 'error: cannot get users'});
    }
};

async  function updateUser (req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  };

async function deleteUser(req, res)
{
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
  
      res.json({ message: `Usuário ${deletedUser.name} deletado com sucesso!` });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
  };

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser
};
  