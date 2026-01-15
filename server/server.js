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

app.get('/readForm', async (req, res) => {
    try {
        // const query = await db.query(`SELECT * FROM userData;`);
        const query = await db.query(
            `SELECT * FROM userData ORDER BY id DESC LIMIT 20 Var1 ORDER BY id ASC;`);
        res.json(query.rows);
    } catch (error) {
        console.log("db error: ", error);
        res.status(500).json({ Error: error.message });
    }
});

app.post("/sendForm", async (req, res) => {
    try {
        const totalCO2 = req.body.totalCO2;
        const userName = req.body.name;
        const query = await db.query(
            `INSERT INTO userdata (totalco2, username) VALUES ($1, $2)`,
            [totalCO2, userName]
        );
        res.json({ status: "success", values: totalCO2 });
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
});

