import ProjectRoutes from './Routes/Projects/routes.js'
import Admins from './Routes/Admins/routes.js'
import Authentication from './Routes/Authentication/routes.js'
import cors from "cors";
import express from "express"

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
Authentication(app)
Admins(app)
ProjectRoutes(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))