import express from "express";

const app = express();
const port =3000;

app.use(express.static('./View/dist'));

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../','View', 'dist', 'index.html'));
  });


app.listen(port,()=>{console.log("port no.: ",port);});