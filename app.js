import express from 'express';
import { getDatabases } from './services/notion.js';

const app = express();

app.get('/', async (_req, res) => {
    const databases = await getDatabases();
    res.json({ databases });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});