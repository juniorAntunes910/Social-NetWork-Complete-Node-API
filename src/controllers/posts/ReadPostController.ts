import { Request, Response } from "express";
import { readPostService } from "../../services/posts/ReadPostService";

class ReadPostController{
    async handle(req: Request, res: Response){
        try{
        const posts = await readPostService.execute();
        return res.status(200).json(posts);
        } catch(error){
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
    }
}
export const readPostController = new ReadPostController();