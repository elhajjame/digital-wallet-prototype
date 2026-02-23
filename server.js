const http = require("http");
const usersRoutes = require("./routes/users");
const walletsRoutes = require("./routes/wallets");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    let body = "";


    req.on("data", chunk => {
        body += chunk;
    });

    req.on("end", () => {
        body = body ? JSON.parse(body) : {};
        usersRoutes(req, res, body);
        walletsRoutes(req, res, body);

        if (!res.writableEnded) {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: "Route not found" }));
        }
    });
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});