import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/DeleteUserService";

class DeleteUserController{
    async handle(req: Request, res: Response){
        try{
            const { id } = req.params;
            const user = deleteUserService.execute({id: id as string});
            return res.status(200).json(user);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
    }
}
export const deleteUserController = new DeleteUserController();