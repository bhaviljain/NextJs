import mongoose from "mongoose";

type ConnectionObject ={
    isConnected?: number

}

const connection : ConnectionObject ={}

async function dbConnect(): Promise <void>{
    if (connection.isConnected){
        console.log("already connected to database")
        return
    }
    try{
    const db = await mongoose.connect(process.env.MONGO_URI || "" )
    connection.isConnected = db.connections[0].readyState

    console.log("DB connected");
    
   
}
    catch(error){
     process.exit(1)
     console.log("DB failed", error);
     
    }
}

export default dbConnect