import { deleteProfileService } from "../../services/profiles/DeleteProfileService";
import { Request, Response } from "express";

class DeleteProfileCOntroller {
    async handle(req: Request, res: Response) {

        try {
            const { id } = req.params;
            const profile = await deleteProfileService.execute({id: id as string});
            return res.status(200).json(profile);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
        
    }
}

export const deleteProfileController = new DeleteProfileCOntroller();