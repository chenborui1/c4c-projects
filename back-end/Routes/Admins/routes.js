import Local_DB from '../../Local_Database/index.js'

export default function Admins(server) {
    const users = Local_DB.Admins

    server.post('/api/login',  (req, res) => {
        const user = users.find(user => user.username === req.body.username)
        if (!user) {
            console.log("no username found!")
            return res.status(400).send('No username found')
        }
       
            if (user.password === req.body.password) {
                console.log("success!")
                return res.send(true)
            }
            else {
                console.log("failed!")
                return res.status(401).send("Wrong password")
            }
        
    })
}