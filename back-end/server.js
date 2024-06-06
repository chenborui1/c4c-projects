import ProjectRoutes from './Routes/Projects/routes.js'
import Admins from './Routes/Admins/routes.js'
import mongoose from "mongoose";
import Authentication from './Routes/Authentication/routes.js'
import cors from "cors";
import express from "express"
const app = express()
const CONNECTION_STRING = process.env.MONGO_URL
mongoose.connect(CONNECTION_STRING)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));


const port = 3000
app.use(cors())
app.use(express.json())



Authentication(app)
Admins(app)
ProjectRoutes(app)


app.listen(port, () => console.log(`Listening on port ${port}!`))