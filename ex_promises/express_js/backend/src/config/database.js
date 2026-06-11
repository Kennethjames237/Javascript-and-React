import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect;
        (`${process.env.MONGODB_URI}`);
        console.log(`\n MongDB connected !!! 
            ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("Mongo connection failed", error);
        process(exit);
    }
}

export default connectDB;