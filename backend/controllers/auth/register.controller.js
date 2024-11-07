import userModel from "../../models/user-schema/user.scheme.js"
import jwt from "jsonwebtoken"; // Import jwt for token generation
import bcrypt from "bcrypt"; // Import bcrypt for password hashing

export const registerController = async (req, res) => {
    const { email, password, name } = req.body; // Destructure the request body

    try {
        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
        const newUser = new userModel({ email, password: hashedPassword, name });
        await newUser.save();
        console.log(newUser)
        // Generate JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TOKEN_EXPIRATION });

        // Respond with the token
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}