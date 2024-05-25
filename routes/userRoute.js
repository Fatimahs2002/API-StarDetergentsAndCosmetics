const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/auth");
const {
  getUser,
  getById,
  login,
  register,
  switchToAdmin,
  updateAdmin,
} = require("../controllers/userController");

router.get('/getAll', getUser)
router.get('/getById', getById)
router.post("/register", register);
router.post("/login", login);
router.put("/switchAdmin/:ID", isAuthenticated(["admin"]), switchToAdmin);
router.delete("/deleteadmin/:ID", isAuthenticated(["admin"]), deleteAdmin);
router.put("/updateadmin/:ID", isAuthenticated(["admin"]), updateAdmin);

module.exports = router;