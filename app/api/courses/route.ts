import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  //   const reqdata = await req.json();
  try {
    // const { userId } = await auth();
    // console.log(userId, "userId");
    const { title, userId } = (await req.json()) as any;
    console.log(title);
    if (!userId) {
      //   return new NextResponse("Unauthorized", { status: 401 });
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const coures = await db.course.create({
      data: {
        userId,
        title,
      },
    });
  } catch (error) {
    console.log(["COURSES", error]);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
