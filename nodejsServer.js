const { ifError } = require("assert");
const http = require("http");
const { json } = require("stream/consumers");

var courses = [
    { id: 1, name: "JS" },
    { id: 2, name: "node" },
    { id: 3, name: "flutter" },
];

http
    .createServer((request, response) => {
        console.log("Got a request!", request.url);

        if (request.url === "/api/courses") {
            response.write(JSON.stringify(courses));
            response.end();
        } else if (request.url === "/api/courses") {
            response.write(JSON.stringify("users"));
            response.end();
        } else {
            response.write("<h1>Hello world this is </h1> <h2>" + request.url + "</h2>");
            response.end();
        }
    })
    .listen(9000);