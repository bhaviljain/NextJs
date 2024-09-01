import {z} from "zod";


export const verifySchema = z.object({
    code: z.string().length(6,{message:"code must be alteast of 6 digits"}),
    password: z.string(),
})