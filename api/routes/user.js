const pool = require("../../db");
const router = require("express").Router();

// get all users
router.get("/users", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM USERS");

    res.send(users.rows);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
