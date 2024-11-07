import jwt from "jsonwebtoken";

export const verifyToken = function (req, res, next) {
    const secretKey = process.env.JWT_SECRET; // Replace with your actual secret key
    // Check for token in the Authorization header
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return res.status(403).send({ message: 'No token provided!' });
    }

    // Verify the token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized!' });
        }
        req.userId = decoded.id; // Store user ID for later use
        next(); // Proceed to the next middleware or route handler
    });
}

