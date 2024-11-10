// services/loggerService.js
class LoggerService {
  log(message) {
    console.log(`[LOG]: ${message}`);
  }
}

module.exports = LoggerService;

// services/userService.js
class UserService {
  constructor(loggerService) {
    this.loggerService = loggerService;
  }

  getUser(userId) {
    this.loggerService.log(`Fetching user with ID: ${userId}`);
    return { id: userId, name: "John Doe" };
  }
}

module.exports = UserService;
