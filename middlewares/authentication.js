const jwt  = require('jsonwebtoken')
const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization').split(" ")[1];
    if (!token) return res.status(401).json({ message: 'Access denied ! Please login and try again' });
   // console.log(token)
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
       //console.log( "verified",verified);
     // console.log(req.user)
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };

  module.exports = authenticateUser;