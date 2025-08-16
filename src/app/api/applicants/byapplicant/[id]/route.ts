
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{
    id : string
}>

export async function DELETE(req: NextRequest, { params } : {params : Params}) {

    const {id} = await params;


    try {
        const res = await prismaClient.application.deleteMany({
            where: {
                job_id  : id
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
                message: "Something Went Wrong"
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
