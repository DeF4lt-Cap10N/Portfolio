// backend/index.js

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/leetcode', async (req, res) => {
  try {
    const response = await axios.get(
      'https://leetcode-api-pied.vercel.app/user/RahulXsharma'
    );
    res.json(response.data);
  } catch (error) {
    console.error("LeetCode API proxy error:", error.message);
    res.status(500).json({ error: "Failed to fetch from proxy" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ LeetCode stats server running at http://localhost:${PORT}`);
});
