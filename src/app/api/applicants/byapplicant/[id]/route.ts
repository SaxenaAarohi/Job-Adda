
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{
    id : string
}>
export async function GET(req: NextRequest, { params } : {params : Params}) {

    const {id} = await params;    

    try {
        const applicants = await prismaClient.application.findMany({
            where: {job_id : id},
            include : {
                user : true
            }
        });

        if (applicants) {
            console.log(applicants.length)
            return NextResponse.json({
                success: true,
                data: applicants

            });

        }
        else {

            return NextResponse.json({
                success: false,
                message: " Applicnat not found"

            });

        }
    }
    catch(err : any){
        console.log(err.messgae);
    } 


}


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
