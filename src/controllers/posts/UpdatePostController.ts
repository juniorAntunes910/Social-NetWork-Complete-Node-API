import { Response, Request } from "express";
import { updatePostService } from "../../services/posts/UpdatePost";

class UpdatePostController{
    async handle(req: Request, res: Response){
        try{
        const { id } = req.params;
        const { title, content, published } = req.body;
        const post = await updatePostService.execute({id: id as string, title, content, published});
        return res.status(200).json(post);
        } catch(error){
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(400).json({error: "Internal Server Error"});
        }
    

    }
}
export const updatePostController = new UpdatePostController();