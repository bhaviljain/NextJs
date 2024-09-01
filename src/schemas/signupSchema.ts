import { z } from "zod";

export const usernameValidation = z
.string()
.min(2,"username must be alteast 2 characters")
.max(20,"username must be no more than 20 characters")
.regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")