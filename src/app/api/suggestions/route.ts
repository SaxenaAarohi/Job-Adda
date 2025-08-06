import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export  async function GET(req : NextRequest){

    const searchp = req.nextUrl.searchParams;
    const query = searchp.get("q");

 
    if(!query){
        return NextResponse.json({
            success : true,
            suggestions : []
        })
    }

    const suggest = await prismaClient.jobs.findMany({
        where : {
            title :
            {
                contains : query,
                mode : "insensitive"
            }
        },
        select : {
            id : true,
            title : true,
        },
        take : 6
    })

    return NextResponse.json({
        success : true,
        suggestions : suggest
    })
   

}