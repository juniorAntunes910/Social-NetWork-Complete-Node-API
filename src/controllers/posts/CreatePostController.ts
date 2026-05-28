import { Response, Request } from "express";
import { createPostService } from "../../services/posts/CreatePostService";
import { z } from "zod";

class CreatePostController {
    async handle(req: Request, res: Response) {
        try{
        const postSchema = z.object({
        title: z.string().min(1, "O titulo do post precisa de pelo menos um caracter"),
        content: z.string().min(1, "O conteudo do post precisa de pelo menos um caracter"),
        published: z.boolean(),
        authorId: z.string()
        })
        const { title, content, published, authorId} = await postSchema.parse(req.body);
        const post = await createPostService.execute({title, content, published, authorId});
        return res.status(201).json(post);
     } catch(error){
        if(error instanceof Error){
            return res.status(400).json({error: error.message})
        }
        return res.status(400).json({error: "Internal Server Error"});
     }
}
}
export const createPostController = new CreatePostController();





/*
   const userSchema = z.object({
            name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres"),
            email: z.string().email("Formato de email invalido"),
            password: z.string().min(6, "A senha deve conter ao menos 6 caracteres")
        });

        interface IPostRequest{
    title: string,
    content: string,
    published: boolean,
    authorId: string,    
}

*/