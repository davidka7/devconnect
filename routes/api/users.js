const express = require("express");
const router = express.Router();

// @route GET api/users/test
// @desc  Tests user route
// @acces Public
router.get("/test", (rew, res) => res.json({ msg: "Users Works" }));

module.exports = router;
