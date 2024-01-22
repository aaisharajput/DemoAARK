import express from "express";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port =3000;
 
app.use(express.static('./View/dist'));
app.get('/',(req,res)=>{
  res.send("welcome to aark server")
})
app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname,'View', 'dist', 'index.html'));
  });


app.listen(port,()=>{console.log("port no.: ",port);});