import { prisma } from "../../../prisma"

interface IPostCommentRequest {
    text: string,
    postId: string,
    authorId: string    
}

class CreateCommentService{
    async execute({text, postId, authorId}: IPostCommentRequest){
        const comment = await prisma.comment.create({
            data:{
                text,
                postId,
                authorId
            }
        }) 
        return comment;
    }
}
export const createCommentService = new CreateCommentService();