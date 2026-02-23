const { wallets, users } = require('../data/store');

const getWallets = (req, res) => {
  res.end(JSON.stringify(wallets));
};
console.log(getWallets);
const createWallets = (req, res, body) => {
  const userExist = users.find(u => u.id === body.userId);

  if (!userExist) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ message: "user not found!" }))
  }

  const wallet = {
    id: Date.now(),
    userId: body.userId,
    name: body.name,
    balance: 0
  }
  wallets.push(wallet);
  res.end(JSON.stringify(wallet));
};


const deposit = (res, req, body) => {
  const wallet = wallets.find(w => w.id === body.walletId);

  if (!wallet || body.amount <= 0) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ message: "error wallet not found or the amount less the zero!" }));

    wallet.balance += body.amount;
    res.end(JSON.stringify(wallet));
  }
}

const withdraw = (req, res, body) => {
  const wallet = wallets.find(w => w.id === body.walletId);

  if (!wallet || body.amount <= 0 || wallet.balance < body.amount) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ message: "error the wallet doesnt exist or there is no sold on this wallet!" }));
    wallet.balance -= body.amount;
    res.end(JSON.stringify(wallet))
  }
}

module.exports = { getWallets, createWallets, deposit, withdraw };
