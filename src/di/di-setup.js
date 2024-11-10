// di-setup.js
const container = require("./container");
const LoggerService = require("../services/loggerService");
const UserService = require("../services/userService");

// Register services
container.register(LoggerService, LoggerService, { singleton: true });
container.register(UserService, UserService, { singleton: true });

module.exports = container;
