import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/services/prisma";


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const companyId = searchParams.get("companyId");

    if (!companyId) {
        return NextResponse.json([], { status: 200 });
    }
    const reviews = await prismaClient.review.findMany({
        where: {
            company: companyId
        },
    });

    return NextResponse.json({
        success: true,
        data: reviews
    }
    );
}



export async function POST(req: NextRequest) {
    const body = await req.json();

    try {
        const review = await prismaClient.review.create({
            data: body
        })

        return NextResponse.json({
            success: true,
            data: review
        })
    }
    catch (err) {
        console.log(err.message);
        return NextResponse.json({
            success: false,
            message: "Not creates"
        })
    }

}