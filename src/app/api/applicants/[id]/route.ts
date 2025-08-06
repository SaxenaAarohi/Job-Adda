//@ts-nocheck
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }) {

    const job_id = params.id;
    console.log(job_id);    

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