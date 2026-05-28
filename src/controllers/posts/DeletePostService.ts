import { Request, Response } from "express";
import { deletePostService } from "../../services/posts/DeletePostService";

class DeletePostController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const post = await deletePostService.execute({ id: id as string });
            return res.status(200).json(post);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(400).json({ error: "Internal Server Error" });
        }
    }
}
export const deletePostController = new DeletePostController();