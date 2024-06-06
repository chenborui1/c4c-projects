
import model from "./model.js";

export default function(server) {
    server.get('/api/projects/', async (req, res) => {
        const projects = await model.find()
        res.json(projects);
    })

}