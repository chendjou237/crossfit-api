const express = require("express")
const apicache = require("apicache")
const app = express();
const bodyParser = require("body-parser")
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const PORT = process.env.PORT || 3000;

const cache = apicache.middleware


const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const v1MemberRouter = require("./v1/routes/memberRoutes")

app.get("/", (req, res) => {
    res.send("Hello World");    
    });


app.use(bodyParser.json())
app.use(cache("2 minutes"))
app.use("/api/v1/workouts", v1WorkoutRouter)
app.use("/api/v1/members", v1MemberRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
    });
