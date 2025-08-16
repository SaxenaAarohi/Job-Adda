export const dynamic = "force-dynamic";
import { getuserfromcookies } from "@/app/helper";
import prismaClient from "@/services/prisma";
import { cookies } from "next/headers"
import { NextResponse } from "next/server";

export async function GET() {
    
  const user = await getuserfromcookies();
  
    if (!user) {
        return NextResponse.json({
            success: false,
            message: "Not Found"
        })
    }

    const userid = user.id;

    const company = await prismaClient.company.findUnique({
        where : {
            owner : userid
        }
    });

    return NextResponse.json({
        success: true,
        data : {
            user,
            company
        }

    })
  
}