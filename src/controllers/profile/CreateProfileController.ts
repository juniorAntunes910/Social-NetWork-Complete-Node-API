import { Request, Response } from "express"
import { createProfileservice } from "../../services/profiles/CreateProfileService"

class CreateProfileController{
    async handle(req: Request, res: Response){
        try{
            const {bio, userId} = req.body;
            const profile = await createProfileservice.execute({bio, userId});
            return res.status(201).json(profile);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
    }
}
export const createProfileController = new CreateProfileController();