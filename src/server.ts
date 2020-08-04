import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Oi Edu!");
  return res.json("Console.log emitido!");
});

app.listen(3333);
