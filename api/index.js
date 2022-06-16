const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const generatePublicUrl = require("./app");


dotenv.config();
const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.get("/resume", async (req, res) => {
  const data = await generatePublicUrl()
  res.send(data)
  console.log(data.webContentLink)
})


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running...");
});

console.log(process.env.PORT)
