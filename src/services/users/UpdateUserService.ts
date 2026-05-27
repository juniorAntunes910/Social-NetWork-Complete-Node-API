import { prisma } from "../../../prisma";

interface IUserRequest{
    id: string, 
    name?: string,
    email?: string
}


class UpdateUserService{
    async execute({id, name, email}: IUserRequest){
        const userExist = await prisma.user.findUnique({
            where: { id }
        })
        if(!userExist){
            throw new Error("Usuário não encontrado!");
        }
        if(email && email !== userExist.email){
            const emailInUSe = await prisma.user.findUnique({
                where: {email}
            });
            if(emailInUSe){
                throw new Error("Email já em uso");
            }
        }
        const user = await prisma.user.update({
            where: {id},
            data: {name, email},
            select: {id: true, name:true, email:true}
        });
        return user;
    }
}
export const updateUserService = new UpdateUserService();
