import todoModel from "../../models/todo-schema/todo.model.js";

export const deleteTodoController=async (req,res)=>{
    try {
        console.log("call")
        const todoId = req.params.id; // Get the todo ID from the request parameters
        const result = await todoModel.findByIdAndDelete(todoId); // Delete the todo by ID
        console.log("todo id", todoId, "result", result);
        if (!result) {
            return res.status(404).json({ message: "Todo not found" }); // Handle case where todo is not found
        }
        
        return res.status(200).json({ message: "Todo deleted successfully" }); // Success response
    } catch (error) {
        return res.status(500).json({ message: "Server error", error }); // Handle server error
    }
};