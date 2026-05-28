import { prisma } from "../../../prisma";

interface IPostRequest{
    id: string
}


class DeletePostService{
    async execute({id}: IPostRequest){
        const existPost = await prisma.post.findUnique({
            where: {id}
        });
        if(!existPost){
            throw new Error("O post não existe")
        }
        const post = await prisma.post.delete({
            where: {id}
        });
        return post;
    }
}
export const deletePostService = new DeletePostService();