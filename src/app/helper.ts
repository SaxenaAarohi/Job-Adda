import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";
import { Openings } from "../../generated/prisma";

type Userwithall = {
    id: string;
    email: string;
    role: string;
    company?: {
        id: string;
        name: string;
        job: Openings[];
        description: string;
        owner: string;
    } | null;
} | null;

export async function getuserfromcookies() {

    const usercookies = await cookies();
    const email = usercookies.get("email")?.value;


    if (!email) {
        return null;
    }

    const user: Userwithall | null = await prismaClient.user.findUnique({
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