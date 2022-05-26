import express from "express";
import bodyParser from "body-parser";
import { getData } from "./database/getData.js";
import { addData } from "./database/addData.js";
import { updateData } from "./database/updateData.js";

// DOTENV stuff
import { config } from "dotenv";
import { increment } from "firebase/firestore/lite";
config();

const app = express();
const port = process.argv[2] === "true" ? 3000 : process.env.PORT;

app.use(bodyParser.json());

// GET stats/:id
// QUERY PARAMS choice_id?
// Return array of statistiques for this id and this choice_id if provided
app.get("/stats/:id", async (req, res) => {
  const id = req.params.id;
  const choice_id = <string | null>req.query.choice_id;
  const data = await getData("stats", id);
  if (!data) {
    res.status(404).json({ message: `Nothing was found for ${id}` });
    return;
  }
  let result = {};
  if (choice_id)
    result = {
      id,
      choice: {
        id: choice_id,
        number: data[choice_id],
      },
    };
  else
    result = {
      id,
      stats: data,
    };
  res.status(200).json(result);
});

// POST register
// BODY { id: string }
// Return 200 if the id is registered and 400 if it is already registered
app.post("/register", async (req, res) => {
  const id = req.body.id;
  const data = await getData("stats", id);
  if (data) {
    res.status(400).json({ message: `${id} is already registered` });
    return;
  }
  await addData("stats", id, {});
  res.status(200).json({ message: `${id} is registered` });
});
// Rerturn 404 for all other routes
app.all("*", (_req, res) => {
  res.status(404).json({ message: "No ressource here" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
