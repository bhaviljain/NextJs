import mongoose,{Schema,Document} from "mongoose"

export interface Message extends Document {
    content : string;
    created : Date
}

//Message schema
const MessageSchema : Schema<Message> = new Schema({
    content:{
     type:String,  
     required: true
    },
    created:{
    type: Date,
    required:true,
    default: Date.now
    }
})

export interface User extends Document{
    username:string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}

//User Schema
const UserSchema : Schema<User> = new Schema({
    username:{
     type:String,
     required: [true,"Username is required"],
     trim: true,
     unique: true,
    },
    email:{
        type:String,
        required: [true, "email is required"],
        unique: true,
        match:[/.+\@.+\..+/,"please use a valid email "]
    },
    password: {
        type: String,
        required: true,
    },
    verifyCode: {
        type: String,
        required: true,
    },
    verifyCodeExpiry: {
        type: Date,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessage: {
        type: Boolean,
        required: true,
    },
    messages:[MessageSchema]
    
})


const UserModal = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModal
