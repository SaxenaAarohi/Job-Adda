export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/services/prisma";

type Params = Promise<{
id : string
}>

export async function GET(req : NextRequest , {params} : {params : Params}){
     const {id} = await params;
     
      try {
     const  company = await prismaClient.company.findUnique({
            where: {
                id
            },
            include: {
                job: true
            }
        })
        return NextResponse.json({
            success : true,
            data : company
        })
    }
    catch (err) {
        console.log(err);
    }

}