import todoModel from "../../models/todo-schema/todo.model.js"

export const createTodoController= async (req,res)=>{
    try {
        const { title } = req.body;
        const userId = req.userId;
        
        const newTodo = new todoModel({ title, userId });
        
        const todo = await newTodo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}