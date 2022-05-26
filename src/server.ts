import express from "express";
import bodyParser from "body-parser";

// DOTENV stuff
import { config } from "dotenv";
import { increment } from "firebase/firestore/lite";
config();

const app = express();
const port = process.argv[2] === "true" ? 3000 : process.env.PORT;

app.use(bodyParser.json());

// Rerturn 404 for all other routes
app.all("*", (_req, res) => {
  res.status(404).json({ message: "No ressource here" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
