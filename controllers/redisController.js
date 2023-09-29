const redisService = require("../services/redisServices");

const redisSet = async (req, res) => {
  const { key, value } = req.body;

  if (!key || !value) {
    return res.status(400).json({ message: "key and value are required." });
  }

  try {
    await redisService.set(key, value);
    console.log(`[server] ${key}: ${value} 已創建到redis`);
    res.json({ message: `[server] ${key}: ${value} 已創建到redis` });
  } catch (error) {
    console.log(`[server] 錯誤 ${error}`);
    res.status(500).json({ message: "創建失敗" });
  }
};

const redisGet = async (req, res) => {
  const key = req.params.key;

  try {
    const value = await redisService.get(key);

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
};

module.exports = { redisSet, redisGet };
