const redisClient = require("../config/redisConfig")

async function set(key, value) {
  return redisClient.set(key, value);
}

async function get(key) {
  return redisClient.get(key);
}

module.exports = { set, get };
