const { getUser, createUser } = require("../controllers/users")

const userRoutes = (req, res, body) => {
  if (req.method === 'GET' && req.url === '/users') {
    return getUser(req, res);
  }
  if (req.method === 'POST' && req.url === '/users') {
    return createUser(req, res, body);
  }
}

module.exports = userRoutes;