import { Interface } from "node:readline";
import { prisma } from "../../../prisma";


interface IProfileRequest{
    id: string
}

class DeleteProfileService{

    async execute({id}: IProfileRequest){
        const existProfile = await prisma.profile.findUnique({
            where: {id}
        });
        if(!existProfile){
            throw new Error("O Profile não existe");
        }
        const profile = await prisma.profile.delete({
            where: {id}
        });
        return profile;
    }
}


export const deleteProfileService = new DeleteProfileService();
