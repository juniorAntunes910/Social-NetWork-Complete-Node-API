import { prisma } from '../../../prisma'
import bcrypt from 'bcryptjs'

interface IUserRequest {
    name: string,
    email: string,
    password: string
}

class CreateUserService{

    async execute( { name, email, password}: IUserRequest ){
        const userExist = await prisma.user.findUnique({
            where: { email }
        });
        if(userExist){
            throw new Error("Este email já foi cadastrado!");
        }
        const hashedPassword = await bcrypt.hash(password, 8);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            },
        });
        return user;
    }
}

export const createUserService = new CreateUserService();