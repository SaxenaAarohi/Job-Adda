import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req : NextRequest){

const body = await req.json();

try{

    const user = await prismaClient.user.create({
    data : body
});

if(user){
    return NextResponse.json({
        success : true,
        data : user
    })
}

}
catch(err : any){
    console.log(err.message);
    alert("Already used")
    return NextResponse.json({
        success : false,
        message : "Something Went Wrong"
    })
}



}