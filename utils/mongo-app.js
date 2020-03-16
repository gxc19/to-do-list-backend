const { MongoClient } = require('mongodb')

const addTask = async task => {
    const uri = "mongodb+srv://gxc19:<password>@practice-cluster-5rwoc.mongodb.net/test?retryWrites=true&w=majority"
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

    try {
        await client.connect()
        const db = client.db("to-do-list")
        await db.collection("tasks").insertOne({ task: task })
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

const allTask = async () => {
    const uri = "mongodb+srv://gxc19:<password>@practice-cluster-5rwoc.mongodb.net/test?retryWrites=true&w=majority"
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

    try {
        await client.connect()
        const db = client.db("to-do-list")
        const response = await db.collection("tasks").find().toArray()
        return response
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

const deleteTask = async task => {
    const uri = "mongodb+srv://gxc19:<password>@practice-cluster-5rwoc.mongodb.net/test?retryWrites=true&w=majority"
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

    try {
        await client.connect()
        const db = client.db("to-do-list")
        const response = await db.collection("tasks").deleteOne({ task: task})
        return response.result
        
    } catch (error) {
        console.log(error)
    } finally {
        await client.close() 
    }
}


module.exports = {
    addTask,
    allTask,
    deleteTask
}