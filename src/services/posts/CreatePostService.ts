import { prisma } from "../../../prisma"

interface IPostRequest{
    title: string,
    content: string,
    published: boolean,
    authorId: string,    
}

class CreatePostService{

    async execute({title, content, published, authorId}: IPostRequest){
        const post = await prisma.post.create({
            data:{
                title,
                content,
                published,
                authorId
            },
        })
        return post;
    }
}

export const createPostService = new CreatePostService();