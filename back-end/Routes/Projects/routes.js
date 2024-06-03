import Local_DB from '../../Local_Database/index.js'

export default function(server) {
    server.get('/api/projects/', (req, res) => {
        const courses = Local_DB.Projects;
        res.send(courses);
    })

}