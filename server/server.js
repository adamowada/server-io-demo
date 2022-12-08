'use strict';

// Imports

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { read } from 'files';
import { write } from 'files';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;
app.use(cors());
app.use(express.json())
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

// Endpoints

app.get('/get-file', getFile);

async function getFile(req, res){
    const data = await read('data.json').then(JSON.stringify);
    res.send(data);
}

app.post('/post-file', postFile);

async function postFile(req, res){
    await write('data.json', req.body.file);
    res.send('File saved');
}



