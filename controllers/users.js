const { user } = require('../data/store');

const getUser = (req, res) => {
  res.end(JSON.stringify(user));
}

const createUser = (req, res, body) => {
  const newUser = {
    id: Date.now(),
    name: body.name
  }
  user.push(newUser);
  res.end(JSON.stringify(newUser));
}

module.exports = { getUser, createUser };