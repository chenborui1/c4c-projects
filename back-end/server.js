import ProjectRoutes from './Routes/Projects/routes.js'
import cors from "cors";
import express from "express"

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())


ProjectRoutes(app)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))