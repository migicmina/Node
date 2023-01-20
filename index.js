const express = require('express');
const app = express();
const port = 3000;
//da bi server vracao slike, slikove i js skriote dodati:
app.use(express.static('public'))

app.get('/index',(req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});     

app.get('/druga',(req, res) => {
  res.sendFile(__dirname + "/public/druga.html");
});  

app.get('/ishrana',(req, res) => {
  res.sendFile(__dirname + "/public/ishrana.html");
}); 
app.get('/fitpas',(req, res) => {
  res.sendFile(__dirname + "/public/fitpasslogin.html");
}); 

app.get('/', (req, res) => {
  res.send('Mina voli aleksu');
});     

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

