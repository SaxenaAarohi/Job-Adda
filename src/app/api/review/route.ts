import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/services/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const companyId = searchParams.get("companyId");

    if (!companyId) {
      return NextResponse.json({ success: true, data: [] });
    }

    const reviews = await prismaClient.review.findMany({
      where: { company: companyId }
    });

    return NextResponse.json({ success: true, data: reviews });
  } catch (err) {
    console.error("Error fetching reviews:", err);
    return NextResponse.json({ success: false, message: "Failed to fetch reviews" });
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.content || !body.company || !body.user_id) {
      return NextResponse.json({
        success: false,
        message: "Missing required fields"
      });
    }

    const review = await prismaClient.review.create({
      data: {
        content: body.content,
        company: body.company,
        user_id: body.user_id
      }
    });

    return NextResponse.json({ success: true, data: review });
  }
  catch (err) {
    console.error("Error creating review:", err);
    return NextResponse.json({ success: false, message: err.message || "Not created" });
  }
}
