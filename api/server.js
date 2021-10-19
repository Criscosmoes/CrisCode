const express = require("express");
const cors = require("cors");
const UserRouter = require("./routes/user");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", UserRouter);

module.exports = server;
