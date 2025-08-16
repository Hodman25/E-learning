import { z } from 'zod';



export const ValidationSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters long")
        .max(25, "Name must be at most 25 characters long")
        .nonempty("Name cannot be empty"),

        email: z
        .string()
        .email("invalid email format")
        .nonempty("Email cannot be empty"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(15, "Password must be at most 15 characters long")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
        .nonempty("Password cannot be empty"),

        
        
    text: z
        .string()
        .min(10, "Text must be at least 10 characters long")
        .max(100, "Text must be at most 100 characters long")
        .nonempty("Text cannot be empty")


})