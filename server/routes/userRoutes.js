// routes/userRoutes.js
const express = require("express");
const {
  createUser,
  loginUser,
  updateUser,
  updatePassword,
  deleteUser,
} = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);

// Apply auth middleware to protected routes
router.put("/update/:id", auth, updateUser);
router.put("/update-password/:id", auth, updatePassword);
router.delete("/delete/:id", auth, deleteUser);

module.exports = router;
