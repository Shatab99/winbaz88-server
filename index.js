const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://winbazz:12345@cluster0.h0ut9p8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("mongoose connected successfully");
        // Start the server only after successfully connecting to MongoDB
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log("error connecting to mongodb", error);
    });

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server Running")
})

// All Routes here 

const userRoute = require('./Api/Routes/userRoute');


app.use("/", userRoute)