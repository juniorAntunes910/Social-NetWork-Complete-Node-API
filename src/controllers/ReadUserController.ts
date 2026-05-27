import { readUserService } from "../services/ReadUserService";
import { Request, Response } from "express";
class ReadUSerController{
    async handle(req: Request, res: Response){
        try{
            const users = await readUserService.execute();
            return res.json(users);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({error : error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
    }
}

export const readUserController = new ReadUSerController();