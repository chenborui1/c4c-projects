import "dotenv/config.js";
import model from './model.js'
import jwt from 'jsonwebtoken';
export default function Admins(server) {
    function generateAccessToken(user) {
        const payload = {
          username: user.username,
        };
        
        const secret = process.env.SECRET_KEY;
      
       
      
        return jwt.sign(payload, secret, {expiresIn: 500});
      }

    server.post('/api/login',  async (req, res) => {
        
        const user = await model.findOne({ username: req.body.username });
        if (!user) {
            console.log("no username found!")
            return res.status(400).send('No username found')
        }
       
            if (user.password === req.body.password) {
              
                const authToken = generateAccessToken(user)
                return res.send(authToken)
            }
            else {
               
                return res.status(401).send("Wrong password")
            }
        
    })
}