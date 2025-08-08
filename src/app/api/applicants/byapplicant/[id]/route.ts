//@ts-nocheck
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }) {

    const job_id = params.id;    

    try {
        const applicants = await prismaClient.application.findMany({
            where: {job_id},
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
    catch(err){
        console.log(err.messgae);
    } 


}


export async function DELETE(req: NextRequest, { params }) {

    const jobid = await params.id;


    try {
        const res = await prismaClient.application.deleteMany({
            where: {
                job_id : jobid,
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
    catch (err) {
        console.log(err.message)
        return NextResponse.json({
            success: false,
            message: err.message
        })
    }

}
