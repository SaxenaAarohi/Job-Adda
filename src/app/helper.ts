import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";

export async function getuserfromcookies() {

    const usercookies = await cookies();
    const email = usercookies.get("email")?.value;


    if (!email) {
        return null;
    }

    const user = await prismaClient.user.findUnique({
        where: { email },
        include: {
            company: {
                include: {
                    job: true
                }
            }
        }
    })
    
    if (!user) {
        return null;
    }

    return user;
}