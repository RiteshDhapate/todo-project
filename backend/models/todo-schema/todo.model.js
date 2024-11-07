import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User schema
        required: true
    },
    stage: {
        type: String,
        enum: ['incomplete', 'doing', 'completed'], // Allowed values for stage
        default: 'incomplete' // Default value
    }
},
{
    timestamps: true // Automatically adds createdAt and updatedAt fields
}
);

// Export the model
const todoModel = mongoose.model('Todo', todoSchema);

export default todoModel;
