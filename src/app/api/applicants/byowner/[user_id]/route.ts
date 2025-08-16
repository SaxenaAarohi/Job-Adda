import { NextRequest , NextResponse} from "next/server";
import prismaClient from "@/services/prisma";


type Params = Promise<{
    user_id : string
}>

export async function DELETE(
    req: NextRequest,
     { params }: { params: Params }) {

    const {user_id} = await params;


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
