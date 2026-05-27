import { Request, Response } from "express";
import { updatePRofileService } from "../../services/profiles/UpdateProfileService";

class UpdateProfileController{
    async handle(req: Request, res: Response){
        try{
            const {id} = req.params;
            const {bio} = req.body;
            const profile = await updatePRofileService.execute({id: id as string, bio});
            return res.status(200).json(profile);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
    }   
}

export const updateProfileController = new UpdateProfileController();