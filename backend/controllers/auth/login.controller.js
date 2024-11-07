import bcrypt from 'bcrypt'; // Import bcrypt
import jwt from 'jsonwebtoken'; // Import jwt
import userModel from "../../models/user-schema/user.scheme.js"

export const loginController=async (req,res)=>{
    try {
        const { email, password } = req.body; // Extract email and password from request body
        
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password); // Compare provided password with hashed password
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TOKEN_EXPIRATION });

        // Send token in response
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}