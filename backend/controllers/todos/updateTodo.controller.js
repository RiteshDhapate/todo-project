import todoModel from "../../models/todo-schema/todo.model.js";

export const updateTodoController = async (req, res) => {
    try {
        const { id, title, stage } = req.body; // Extracting id, title, and stage from the request body
        console.log({ id, title, stage })
        // Validate stage value
        const validStages = ['incomplete', 'doing', 'completed'];
        if (stage && !validStages.includes(stage)) {
            return res.status(400).json({ message: "Invalid stage value" }); // Handling invalid stage value
        }

        const updatedTodo = await todoModel.findByIdAndUpdate(id, { title, stage }, { new: true }); // Updating the todo item

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" }); // Handling case where todo is not found
        }

        return res.status(200).json(updatedTodo); // Responding with the updated todo
    } catch (error) {
        return res.status(500).json({ message: error.message }); // Handling errors
    }
};