import { prisma } from "../../../prisma";

class ReadPostService {
    async execute() {
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                published: true,
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        })
        return posts;
    }
}

export const readPostService = new ReadPostService();
