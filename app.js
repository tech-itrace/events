const express = require("express");

const eventRouter = require("./routes/EventRoutes");

// const { MongoClient, ServerApiVersion } = require('mongodb');
let uri = "mongodb+srv://udhay:udhay321@cluster0.yfamhbc.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("events").collection("event");
//   // perform actions on the collection object
//   client.close();
// });

// console.log(client);

const mongoose = require("mongoose");

uri = "mongodb+srv://udhay:udhay321@cluster0.yfamhbc.mongodb.net/events?retryWrites=true&w=majority";

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    
).catch(
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

const app = express();

app.use(express.json());
app.use("/api/events", eventRouter);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server is running in ", PORT);
});

module.exports = app;