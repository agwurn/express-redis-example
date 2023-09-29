const express = require("express");
const redisRoutes = require("./routes/redisRoutes");

const app = express();

app.use(express.json());
app.use("/redis", redisRoutes);

app.listen(3000, () => {
  console.log(`[Server] running on port 3000.`);
});
