import { Request,Response } from "express";
import { createCommentService } from "../../services/comments/CreateCommentService";

class CreateCommentController{
    async handle(req: Request, res: Response){
        try{
            const { text, postId, authorId } = req.body;
            const comment = await createCommentService.execute({text, postId, authorId});
            return res.status(201).json(comment);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({error : error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
    }
}

export const createCommentController = new CreateCommentController();