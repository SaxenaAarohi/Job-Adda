import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/services/prisma";

export async function GET(req : NextRequest , {params} : any){
     const id = params.id;
     
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