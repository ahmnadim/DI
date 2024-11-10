// routes/userRoutes.js
const express = require("express");
const container = require("../di/di-setup");
const UserService = require("../services/userService");

const router = express.Router();

router.get("/users/:id", (req, res) => {
  // Resolve the UserService from the container
  const userService = container.resolve(UserService);
  const user = userService.getUser(req.params.id);
  res.json(user);
});

module.exports = router;
