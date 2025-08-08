//@ts-nocheck
import { getuserfromcookies } from "@/app/helper";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }) {

    const user = await getuserfromcookies();
    const job_id = await params.id;

    if (!user) {
        return NextResponse.json({
            success: false,
            message: "User not found "
        })
    }

    const jobtosave = {
        user_id: user.id,
        job_id
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
catch(err){
    console.log(err.message);
        return NextResponse.json({
            success: false,
            message: err.message
        })
}


}



export async function DELETE(req: NextRequest, { params }) {

    const jobid = await params.id;

    try {
        const res = await prismaClient.savejob.deleteMany({
            where: {
                job_id: jobid,
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
    catch (err) {
        console.log(err.message)
        return NextResponse.json({
            success: false,
            message: err.message
        })
    }

}