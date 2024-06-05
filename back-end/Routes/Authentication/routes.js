import VerifyToken from "./verifyToken.js";

export default function Authentication(server) {
    server.get('/api/protected', (req, res) => {
        res.send(true);
      });
}