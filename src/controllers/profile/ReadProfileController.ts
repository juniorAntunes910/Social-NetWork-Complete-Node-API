import { Profile } from './../../../node_modules/.prisma/client/index.d';
import { Response, Request } from "express";
import { readProfileService } from "../../services/profiles/ReadProfileService";

class ReadProfileController{
    async handle(req: Request, res: Response){
 
        try{
        const profiles = await readProfileService.execute();
        return res.status(200).json(profiles);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
    }
}
export  const readProfileCOntroller = new ReadProfileController();