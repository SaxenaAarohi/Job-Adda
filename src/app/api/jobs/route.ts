export const dynamic = "force-dynamic";
import prismaClient from "@/services/prisma";
import { NextResponse } from "next/server";

export async function POST(req: any) {

    const body = await req.json();
  
    try {
        await prismaClient.openings.create({
            data : body
        });

        return NextResponse.json({
            success: true,
            message : "Job created"
        })
    }
    catch (err: any) {
        console.log(err.message);

        return NextResponse.json({
            success : false,
            message : "Not saved"

        })
    }



}