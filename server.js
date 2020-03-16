const express = require('express')
const path = require('path')
const { addTask, allTask, deleteTask } = require('./utils/mongo-app')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3010

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// Adding task
app.post("/taskAdd", (req, res) => {
    addTask(req.body.task)
    res.send(`${req.body.task}`)
})

// Show all tasks

app.get("/data", async (req, res) => {
    const showTask = await allTask(req.body.task)
    console.log(showTask)
    res.send({ data: showTask})
})

// Delete task
app.post("/delete", async (req, res) => {
    await deleteTask(req.body.task)
    console.log(req.body.task)
    res.send(`${req.body.task}`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})