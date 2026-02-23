const { createWallets, getWallets, deposit, withdraw } = require("../controllers/wallets")

const walletsRoutes = (req, res, body) => {
  if (req.method === "GET" && req.url === "/wallets") {
    return getWallets(req, res);
  }

  if (req.method === "POST" && req.url === "/wallets") {
    return createWallets(req, res, body);
  }

  if (req.method === "POST" && req.url === "/deposit") {
    return deposit(req, res, body);
  }

  if (req.method === "POST" && req.url === "/withdraw") {
    return withdraw(req, res, body);
  }
};

module.exports = walletsRoutes;
