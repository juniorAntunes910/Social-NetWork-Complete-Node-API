import { prisma } from "../../../prisma"

class ReadCommentService{
    async execute(){
        const comments = await prisma.comment.findMany({
            select:{
                id: true,
                text: true,
                post: true,
                author: true,
                createdAt: true
            }
        })
        return comments;
    }
}
export const readCommentService = new ReadCommentService();