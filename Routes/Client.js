import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const Router = express.Router();

Router.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../','View', 'dist', 'index.html'));
});

export { Router as Client };