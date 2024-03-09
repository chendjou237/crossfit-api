const express = require("express")

const app = express();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3000;

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

app.get("/", (req, res) => {
    res.send("Hello World");    
    });


app.use("/api/v1/workouts", v1WorkoutRouter)
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
