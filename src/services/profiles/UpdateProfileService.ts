import {prisma} from "../../../prisma";


interface IProfileRequest{
    id: string,
    bio: string
}

class UpdateProfileService{
    async execute({id, bio}: IProfileRequest){
        const profileExist = await prisma.profile.findUnique({
            where: {id}
        });
        if(!profileExist){
            throw new Error("O profile não existe");
        }
        const profile = await prisma.profile.update({
            where: {id},
            data: {bio},
            select: {
                id: true,
                bio: true,
                user: true
            }
        });
        return profile;
    }
}

export const updatePRofileService = new UpdateProfileService();