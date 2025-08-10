import { NextRequest , NextResponse} from "next/server";
import prismaClient from "@/services/prisma";

export async function DELETE(req: NextRequest, { params }: { params: { user_id: string } }) {

    const userid = params.user_id;


    try {
        const res = await prismaClient.application.deleteMany({
            where: {
                user_id : userid,
            }
        })

            return NextResponse.json({
                success: true,
                message: "deletd"
            })

    }
    catch (err : any) {
        console.log(err.message)
        return NextResponse.json({
            success: false,
            message: err.message
        })
    }

}
