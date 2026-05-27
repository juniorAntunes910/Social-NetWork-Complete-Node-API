import {prisma} from "../../../prisma"

class ReadProfileService{

    async execute(){
        const profile = await prisma.profile.findMany({
            select:{
                    id: true,
                    bio: true,
                    user: true
            }
        })
        return profile;
    }
}

export const readProfileService = new ReadProfileService();