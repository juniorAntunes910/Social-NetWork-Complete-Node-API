import { Request, Response } from "express";
import { updateCommentService } from "../../services/comments/UpdateCommentService";

class UpdateCommentController{
    async handle(req: Request, res: Response){
        try{
        const { id } = req.params;
        const {text} = req.body;
        const comment = await updateCommentService.execute({id: id as string, text});
        return res.status(200).json(comment);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({error : error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
    }
}
export const updateCommentController = new UpdateCommentController();