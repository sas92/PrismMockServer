const { exec } = require("child_process");
const EXPRESS = require('express');
const app = EXPRESS();

const SERVER_PORT = process.env.PORT || 8080;
const PRISM_PORT = process.env.PRISM_PORT || 4010;
const LOCALHOST = '127.0.0.1';
const API_DOC = process.env.API_DOC;

console.log('Prism starting...');

const proxy = require('http-proxy').createProxyServer({
    host: `http://${LOCALHOST}:${PRISM_PORT}`,
    port: PRISM_PORT
});
app.use('/', function (req, res, next) {
    proxy.web(req, res, {
        target: `http://${LOCALHOST}:${PRISM_PORT}`
    }, next);
});

exec(`prism mock ./${API_DOC} -p ${PRISM_PORT}`, (error, stdout, stderr) => {
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

app.listen(SERVER_PORT);
console.log(`Prism is running at ${SERVER_PORT}`);
