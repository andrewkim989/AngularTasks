var express = require("express");
var app = express();
const path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/Tasks/dist/Tasks"));

var tasks = [];

app.get("/tasks", (req, res, next)=> {
    return res.json(tasks);
});

app.post("/tasks", function(req, res) {
    var id = req.body.id;
    var task = req.body.task;
    var created_at = req.body.created_at;
    var updated_at = req.body.updated_at;
    tasks.push({id: id, task: task, created_at: created_at, updated_at: updated_at});
});

app.get("/tasks/:id", (req, res, next)=> {
    return res.json(tasks[req.params.id]);
});

app.put("/tasks/:id", function(req, res) {
    var task = tasks[req.params.id];
    task.task = req.body.task;
    task.updated_at = Date.now();
});

app.delete("/tasks/:id", function(req, res) {
    tasks.splice(req.params.id, 1);
});

app.all("*", function (req, res) {
    res.sendFile(path.resolve("./Tasks/dist/Tasks/index.html"));
});

app.listen(5678, function () {
    console.log("Listening on port 5678");
});