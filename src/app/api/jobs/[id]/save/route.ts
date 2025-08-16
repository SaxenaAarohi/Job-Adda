export const dynamic = "force-dynamic";
import { getuserfromcookies } from "@/app/helper";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{
 id : string
}>

export async function GET(req: NextRequest, { params } : {params : Params}) {

    const user = await getuserfromcookies();
    const {id} = await params;

    if (!user) {
        return NextResponse.json({
            success: false,
            message: "User not found "
        })
    }

    const jobtosave = {
        user_id: user.id,
        job_id : id
    };
    
try {

    const savedjob = await prismaClient.savejob.create({
        data : jobtosave
    });
    
    return NextResponse.json({
        success : true,
        data : savedjob
    });
}
catch(err : any){
    console.log(err.message);
        return NextResponse.json({
            success: false,
            message: err.message
        })
}


}



export async function DELETE(req: NextRequest, { params } : {params : Params}) {

    const {id} = await params;

    try {
        const res = await prismaClient.savejob.deleteMany({
            where: {
                job_id:id
            }
        })

        if (res) {
            return NextResponse.json({
                success: true,
                message: "deletd"
            })
        }
        else{
                return NextResponse.json({
                success: false,
                message: "Something went wrong"
            })
        }

    }
    catch (err : any) {
        console.log(err.message)
        return NextResponse.json({
            success: false,
            message: err.message
        })
    }

}