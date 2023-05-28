const express = require("express");
const app = express();
const port = process.env.PORT || 3001;


const { exec } = require("child_process");

//getting linux version
exec("cat /proc/version", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});


app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Test app listening on port ${port}!`));


const html = `Hey, this is render.com test app, version 2.0, updated version`;
