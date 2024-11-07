import todoModel from "../../models/todo-schema/todo.model.js"

export const getTodos = async (req, res) => {
    try {
        const userId = req.userId; // Get user ID from request parameters
        const todos = await todoModel.find({ userId }); // Query todos for the specific user
        res.status(200).json(todos); // Send the todos back in the response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
};