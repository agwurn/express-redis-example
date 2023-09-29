const express = require("express");
const router = express.Router();
const RC = require("../controllers/redisController");

router.post("/", RC.redisSet);
router.get("/:key", RC.redisGet);

module.exports = router;
