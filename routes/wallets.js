const { getWallets, createWallet, deposit, withdraw } = require("../controllers/walletsController");

const walletsRoutes = (req, res, body) => {
  if (req.method === "GET" && req.url === "/wallets") {
    return getWallets(req, res);
  }

  if (req.method === "POST" && req.url === "/wallets") {
    return createWallet(req, res, body);
  }

  if (req.method === "POST" && req.url === "/deposit") {
    return deposit(req, res, body);
  }

  if (req.method === "POST" && req.url === "/withdraw") {
    return withdraw(req, res, body);
  }
};

module.exports = walletsRoutes;
