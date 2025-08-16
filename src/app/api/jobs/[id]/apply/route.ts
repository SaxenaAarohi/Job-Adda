export const dynamic = "force-dynamic";
import { getuserfromcookies } from "@/app/helper";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{
    id : string
}>
export async function GET(req: NextRequest, { params } : {params :Params}) {

    const user = await getuserfromcookies();
    const {id} = await params;

    if (!user) {
        return NextResponse.json({
            success: false,
            message: "User not found "
        })
    }

    const app = {
        user_id: user.id,
        job_id : id
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
catch(err : any){
    console.log(err.message);
}


}