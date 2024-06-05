import ProjectRoutes from './Routes/Projects/routes.js'
import Admins from './Routes/Admins/routes.js'
import Authentication from './Routes/Authentication/routes.js'
import cors from "cors";
import express from "express"
import path from 'path'
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'client/build')));


Authentication(app)
Admins(app)
ProjectRoutes(app)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))