import { prisma } from "../../../prisma";

interface IPostRequest{
    id: string,
    title?: string,
    content?: string,
    published?: boolean
}

class UpdatePostService{
    async execute ({id, title, content, published}: IPostRequest){
        const existPost = await prisma.post.findUnique({
            where: {id}
        });
        if(!existPost){
            throw new Error("O Post não existe");
        }
        const post = await prisma.post.update({
            where: {id},
            data: {title, content, published},
            select: {
                id: true,
                title: true,
                content: true, 
                published: true
            }
        });
        return post;
    }
}

export const updatePostService = new UpdatePostService();