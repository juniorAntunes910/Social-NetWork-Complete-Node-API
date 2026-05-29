import { prisma } from "../../../prisma"

interface IUpdateComment{
    id: string,
    text: string,

}

class UpdateCommentService{
    async execute({id, text}: IUpdateComment){
        const existComment = await prisma.comment.findUnique({
            where: {id}
        })
        if(!existComment){
            throw new Error("O Comentário não existe");
        }
        const comment = await prisma.comment.update({
            where: {id},
            data: {text},
            select: {
                id: true,
                text: true,
                post: true,
                author: true,
                createdAt: true
            }
        })
        return comment;
    }
}

export const updateCommentService = new UpdateCommentService();