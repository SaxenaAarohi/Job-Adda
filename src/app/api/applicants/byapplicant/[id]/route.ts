export const dynamic = "force-dynamic";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  context: any
) {
  const { id } = context.params as { id: string };
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
