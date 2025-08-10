import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{
    id : string
}>

export async function GET(req:NextRequest ,{params} : {params : Params}){
    const {id} = await params;
   
    try{
   const res = await prismaClient.review.findMany({
        where : {
            company :  id
        },
        include : {
            user : true
        }
    });

    if(res){
        return NextResponse.json({
            success : true,
            data : res
        });
    }
    else{
            return NextResponse.json({
            success : false,
            message : "Something went wrong"
        });
    }
    }
    catch(err : any){
        console.log(err.message);
    }
 

} 



export async function DELETE(req: NextRequest, { params } : {params : Params}) {

    const {id} = await params;


    try {
        const res = await prismaClient.review.delete({
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
