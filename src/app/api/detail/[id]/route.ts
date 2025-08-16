export const dynamic = "force-dynamic";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{
id : string
}>

export async function GET(req: NextRequest, { params } : {params : Params} ) {

    const {id} = await params;

    try {

        const job = await prismaClient.openings.findUnique({
            where:
                { id: id },
            include: {
                company: true
            }
        });


        if (job) {
            return NextResponse.json({
                success: true,
                data: job
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: "Not found"
            })
        }

    }
    catch (err : any) {
        console.log(err.message);
        return NextResponse.json({
            success: false,
            message: "Id Not found"
        })
    }

}

export async function DELETE(req: NextRequest, { params } : {params : Params}) {

    const {id} = await params;


    try {
        const res = await prismaClient.openings.delete({
            where: {
                id
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
                message: "error"
            })
        }

    }
    catch (err : any) {
        console.log(err.message)
        return NextResponse.json({
            success: false,
            message: "not deletd"
        })
    }

}


export async function POST(req: NextRequest, { params } : {params : Params}) {

    const {id }= await params

    const body = await req.json();

    try {
        const updated = await prismaClient.openings.update({
            where: {
                id
            },
            data: body

        })

        if (updated) {
            return NextResponse.json({
                success: true,
                data: updated
            })
        }
        else {
            return NextResponse.json({
                success: false,
            })
        }

    }
    catch (err : any) {
        console.log(err.message);
    }

}