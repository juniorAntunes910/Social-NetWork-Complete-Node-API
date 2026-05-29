import { Response, Request } from "express";
import { readCommentService } from "../../services/comments/ReadCommentService";

class ReadCommentController{
    async handle(req: Request, res: Response){
        try{
        const comments = await readCommentService.execute();
            return res.status(200).json(comments);
    }catch(error){
        if(error instanceof Error){
            return res.status(400).json({error: error.message});
        }
        return res.status(400).json({error: "Internal Server Error"});
    }
    }
}

export const readCommentController = new ReadCommentController();
