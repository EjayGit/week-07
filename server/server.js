import express, { application } from 'express'
import cors from 'cors'
import {db} from './dbConnection.js'

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

app.get('/readBlogs', async (req, res) => {
    try {
        // const query = await db.query(`SELECT * FROM userData;`);
        const query = await db.query(
            `SELECT * FROM blogposts ORDER BY id DESC LIMIT 20`);
        res.json(query.rows);
    } catch (error) {
        console.log("db error: ", error);
        res.status(500).json({ Error: error.message });
    }
});

app.post("/postblog", async (req, res) => {
    try {
        const {name, post} = req.body.formValues;
        console.log(req.body);
        console.log(`Name: ${name}. Post: ${post}.`)
        const query = await db.query(
            `INSERT INTO blogposts (name, blogpost) VALUES ($1, $2)`,
            [name, post]
        );
        res.json({ status: "success" });
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
});

