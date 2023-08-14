import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"resources_db"
});

// API Endpoints
app.get("/", (req, res) => {
    res.json("hello this is the backend");
});

// GET (READ) resources 
app.get("/resources", (req, res) => {
    const query = "SELECT * FROM resources";
    db.query(query, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err); // Internal Server Error
        }
        return res.status(200).json(data); // OK
    });
});

// POST (CREATE) resource
app.post("/resources", (req, res) => {
    const query = "INSERT INTO resources \
                  (`title`, `description`, `type`, `category`, `subcategory`, `link`) \
                  VALUES (?) ";
    const values = [
        req.body.title,
        req.body.description,
        req.body.type,
        req.body.category,
        req.body.subcategory,
        req.body.link
    ];

    db.query(query, [values], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        }
        return res.status(201).json(data);
    })
});

app.listen(8800, () => {
    console.log("Connected to backend");
});