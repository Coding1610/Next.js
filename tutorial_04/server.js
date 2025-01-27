const jsonServer = require("json-server");
const server = jsonServer.create();
const route = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
    console.log("Request received");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.use(route);
server.listen(3001, () => {
    console.log("JSON Server is running");
});