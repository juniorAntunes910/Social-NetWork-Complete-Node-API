import { Response, Request } from "express";
import { updateUserService } from "../../services/users/UpdateUserService";

class UpdateUserController{

    async handle(req: Request, res: Response){
        try{
            const { id } = req.params as {id: string};
            const { name, email } = req.body;
            const user = await updateUserService.execute({id, name, email});
            return res.json(user);           
        } catch(error){
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
    }
}
export const updateUserController = new UpdateUserController();