const express = require("express");
const router = express.Router();
const getuser = require("../middleware/getuser");

const { registerUser, loginUser, editUser, deleteUser, getUser } = require("../controllers/authController");

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/edit").put(getuser, editUser);
router.route("/delete").delete(getuser, deleteUser);
router.route("/getuser/:id").get(getuser, getUser);
module.exports = router;
