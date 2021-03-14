const express = require("express");

const cors = require("cors");

const router = require("./router");

require("./database");

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

// O aplicativo inicia um servidor e escuta a porta 8080 por conexões
app.listen(process.env.PORT || 8000, ()=> {
    console.log("Server is running!!");
});