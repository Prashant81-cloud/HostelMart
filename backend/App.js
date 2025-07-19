const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Netra")
})


app.listen(3000, ()=>{
    console.log("Connected to server succesfully");
})