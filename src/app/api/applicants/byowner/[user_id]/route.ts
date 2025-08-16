import { NextRequest , NextResponse} from "next/server";
import prismaClient from "@/services/prisma";


export async function DELETE(
  req: NextRequest,
  context: any
) {
  const { user_id } = context.params as { user_id: string };


    try {
        const res = await prismaClient.application.deleteMany({
            where: {
                user_id : user_id,
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
