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

// GET (READ) resource
app.get("/resources/:id", (req, res) => {
    const resourceId = req.params.id;
    const query = "SELECT * FROM resources WHERE id = ?";
    db.query(query, [resourceId], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err)
        }
        return res.status(200).json(data);
    })
})

// POST (CREATE) resource
app.post("/resources", (req, res) => {
    const query = "INSERT INTO resources \
                  (`title`, `description`, `type`, `category`, `sub_category`, `link`) \
                  VALUES (?) ";
    const values = [
        req.body.title,
        req.body.description,
        req.body.type,
        req.body.category,
        req.body.sub_category,
        req.body.link
    ];

    db.query(query, [values], (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        }
        return res.status(201).json("Resource has been created");
    });
});

// DELETE (DELETE) resource
app.delete("/resources/:id", (req, res) => {
    const resourceId = req.params.id;
    const query = "DELETE FROM resources WHERE id = ? ";

    db.query(query, [resourceId], (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(204).json("Resource has been deleted");
    });
});

// PUT (UPDATE) resources
app.put("/resources/:id", (req, res) => {
    const resourceId = req.params.id;
    const query = "UPDATE resources SET \
                  `title` = ?, `description` = ?, `type` = ?, `category` = ?, `sub_category` = ?, `link` = ? \
                  WHERE id = ?";
    const values = [
        req.body.title,
        req.body.description,
        req.body.type,
        req.body.category,
        req.body.sub_category,
        req.body.link
    ];

    db.query(query, [...values, resourceId], (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(204).json(data);
    });
});

app.listen(8800, () => {
    console.log("Connected to backend");
});