import { prisma } from "../../prisma";

interface IUserRequest{
    id: string;
}

class DeleteUserService{
    async execute({id}: IUserRequest){
        const existUser = await prisma.user.findUnique({
            where: {id}
        })
        if(!existUser){
            throw new Error("Usuario não existe");
        }
        const user = await prisma.user.delete({
            where: {id}
        });
        return user;
    }
}

export const deleteUserService = new DeleteUserService();