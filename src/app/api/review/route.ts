import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/services/prisma"
import Company from "@/app/(group)/company/page";

export async function POST(req: NextRequest) {
  const body =await req.json();

  try {
    const reviewarray = await prismaClient.review.create({
      data: {
        content : body.content,
        user_id : body.user_id,
        company : body.company
      }
    });

    if (reviewarray) {
      return NextResponse.json({
        success: true,
        data: reviewarray
      });
    }
    else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong"
      });
    }

  }

  catch (err: any) {
    console.log(err.message);

    return NextResponse.json({
      success: false,
      message: "Not saved"

    });
  }

}
