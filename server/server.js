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

app.get('/readblogs', async (req, res) => {
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
        const {name, location, post} = req.body.formValues;
        const query = await db.query(
            `INSERT INTO blogposts (name, location, blogpost) VALUES ($1, $2, $3)`,
            [name, location, post]
        );
        res.json({ status: "success" });
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
});

app.post("/likes", async (req, res) => {
    try{
        const likeData = req.body.likeData;
        const query = await db.query(
            'UPDATE blogposts SET likes = likes + ($1) WHERE id = ($2)',
            [likeData.value, likeData.id]
        );
    } catch(error){
        res.status(500).json({Error: error.message});
    }
});

app.delete('/:id', async (req, res) => {
    try{    
        const objRow = req.params.id;
        const query = await db.query(`DELETE FROM blogposts WHERE id = ${objRow}`)
    } catch (error){
        console.error(`Error Message line 63: ${error.message}`);
    }
})