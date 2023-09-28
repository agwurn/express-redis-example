const express = require("express");
const Redis = require("ioredis");

const app = express();
const redisClient = new Redis({
  host: "0.0.0.0",
  port: 6379,
});

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

redisClient.on("error", (err) => {
  console.error("Redis Error:", err);
});

app.use(express.json());

app.post("/", async (req, res) => {
  const { key, value } = req.body;

  if (!key || !value) {
    console.log(`[server] 缺少 key 或 value`);
    return res.status(400).json({ message: "key and value are required." });
  }
  
  try {
    await redisClient.set(key, value);
    console.log(`[server] ${key}: ${value} 已創建到redis`);
  } catch (error) {
    console.log(`[server] 錯誤 ${error}`)
  }
  res.json({ message: `成功創建 ${key}: ${value}` });
});

app.get("/:key", async (req, res) => {
  const key = req.params.key;

  try {
    const value = await redisClient.get(key);

    if (value) {
      console.log(`[server] ${key}: ${value} 已讀取`);
      res.json({ key, value });
    } else {
      console.log(`[server] ${key} 不存在`);
      res.status(404).json({ message: "key not found." });
    }
  } catch (error) {
    console.log(`[server] 本地redis連接錯誤`);
    res.status(500).json({ message: "Error fetching data from redis" });
  }
});

app.listen(3000, () => {
  console.log(`[Server] running on port 3000.`);
});
