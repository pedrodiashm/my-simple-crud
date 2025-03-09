const bcrypt = require('bcrypt');
const User = require('../models/User');
const saltRounds = 10;


// aqui são criados a funções CRUD de acordo com o model User

const createUser = async (req, res) => {
    try {
      const { name, email, password} = req.body;
      // hashing password 
      const HashedPassword =  await bcrypt.hash(password, saltRounds);
      const newUser = new User({ name, email, password: HashedPassword });
      await newUser.save();

      const userToReturn = { ...newUser.toObject() };
      delete userToReturn.password;
      res.status(201).json(userToReturn);
      
    } catch (error) {
      res.status(500).json({ error: 'Error to create User' });
    }
  };

const getUser = async (req, res) => {
    try {
      const user = await User.findOne({email})
      if(!user){
        return res.status(404).json({error:" User not found"});
      }
      res.json(user)
    } catch(error){
      res.status(500).json({error: 'error: cannot get user'})
    }
}


async function getUsers(req, res){
    try {
        const users = await User.find();
        res.json(users);
    } catch {
        res.status(500).json({error: 'error: cannot get users'});
    }
};

async function updateUser (req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error: cannott update user' });
    }
  };

async function deleteUser(req, res)
{
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ message: `User: ${deletedUser.name} deleted!` });
    } catch (error) {
      res.status(500).json({ error: 'Error: cannnot delete User' });
    }
  };

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUser
};
  