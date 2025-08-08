//@ts-nocheck
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }) {

    const id = params.id;

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
    catch (err) {
        console.log(err.message);
        return NextResponse.json({
            success: false,
            message: "Id Not found"
        })
    }

}

export async function DELETE(req: NextRequest, { params }) {

    const jobid = await params.id;


    try {
        const res = await prismaClient.openings.delete({
            where: {
                id: jobid,
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
    catch (err) {
        console.log(err.message)
        return NextResponse.json({
            success: false,
            message: "not deletd"
        })
    }

}


export async function POST(req: NextRequest, { params }) {

    const jobid = params?.id;

    const body = await req.json();

    try {
        const updated = await prismaClient.Openings.update({
            where: {
                id: jobid
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
    catch (err) {
        console.log(err.message);
    }

}