import mongoose from 'mongoose';

export const connectDb= async function(){
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("db connection established")
    } catch (error) {
        console.log("error connecting database ",error);
        process.exit(1);
    }
}