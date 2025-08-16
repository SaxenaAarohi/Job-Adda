export const dynamic = "force-dynamic";
import { getuserfromcookies } from "@/app/helper";
import prismaClient from "@/services/prisma";
import { Description } from "@radix-ui/themes/components/alert-dialog";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const user = await getuserfromcookies();

    if (!user) {
        return NextResponse.json({
            success: false,
            message: "Not Found"
        })
    }
  
    const body = await req.json();

    const company = {
        name: body.name,
        description: body.description,
        owner : user.id
    }

    try {

        const newcomp = await prismaClient.company.create({
            data: company
        })
  
        return NextResponse.json({
            success: true,
            data: newcomp
        })

    }

    catch(err){
       console.log(err);
        return NextResponse.json({
            success : false 
        })
    }

}