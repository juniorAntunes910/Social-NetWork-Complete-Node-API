import { prisma } from "../../prisma";

class ReadUserService{
    async execute(){
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true
            }
        });
        return users;
    }
}
export const readUserService = new ReadUserService();