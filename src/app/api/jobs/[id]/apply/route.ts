import { getuserfromcookies } from "@/app/helper";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }) {

    const user = await getuserfromcookies();
    const job_id = params.id;

    if (!user) {
        return NextResponse.json({
            success: false,
            message: "User not found "
        })
    }

    const app = {
        user_id: user.id,
        job_id
    };
    
try {

    const application = await prismaClient.application.create({
        data : app
    });
    
    return NextResponse.json({
        success : true,
        data : application
    });
}
catch(err){
    console.log(err.message);
}


}