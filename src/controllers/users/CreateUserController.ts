import { request } from "node:http";
import { createUserService } from "../../services/users/CreateUserService";
import { z } from "zod";
import { Request, Response } from "express";


class CreateUserController{
    async handle(req: Request, res: Response){
        
        const userSchema = z.object({
            name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres"),
            email: z.string().email("Formato de email invalido"),
            password: z.string().min(6, "A senha deve conter ao menos 6 caracteres")
        });

        try{
            const { name, email, password} = await userSchema.parse(req.body);
            const user = await createUserService.execute({
                name,
                email,
                password
            });
            return res.status(201).json(user);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
    }
    
}
export const createUserController = new CreateUserController();