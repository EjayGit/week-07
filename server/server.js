import express, { application } from 'express'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;
app.listen(PORT, (req,res) => {
    console.log(`This app is listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server API. GET comfy!" });
});

