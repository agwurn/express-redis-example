const Redis = require("ioredis");

const redisClient = new Redis({
  host: "0.0.0.0",
  port: 6379,
});

/*
  (optional) monitor the status of Redis connection
*/
redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

redisClient.on("error", (err) => {
  console.error("Redis Error:", err);
});


module.exports = redisClient;
