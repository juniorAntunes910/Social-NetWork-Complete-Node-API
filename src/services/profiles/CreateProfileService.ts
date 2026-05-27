import { prisma } from "../../../prisma";


interface IProfileRequest{
    bio: string,
    userId: string
}

class CreateProfileService{
    async execute({bio, userId}: IProfileRequest){
        const existProfile = await prisma.profile.findUnique({
            where: {userId}
        })
        if(existProfile){
            throw new Error("O usuário ja existe");
        }
        const profile = await prisma.profile.create({
            data: {
                bio,
                userId
            }
        });
        return profile;
    }
}
export const createProfileservice = new CreateProfileService();