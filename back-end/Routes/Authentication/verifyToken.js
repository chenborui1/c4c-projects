import jwt from 'jsonwebtoken';

const secret = process.env.SECRET_KEY;

function VerifyToken(req, res, next) {
  const token = req.headers.authorization;
  console.log(token)
  console.log("made request")

  if (!token) {
    return res.status(401).send('Access Denied: No Token Provided!');
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid Token');
    }

    req.user = decoded; 
    console.log("Correct token successful")
    next();
  });
}

export default VerifyToken;