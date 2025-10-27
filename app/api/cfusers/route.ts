import { NextResponse } from "next/server";
import { getUsersByUniversity } from "@/lib/codeforce/codeforces";

export async function POST(req: Request) {
  try {
    const { university } = await req.json();

    if (!university || typeof university !== "string") {
      return NextResponse.json(
        { error: "University name is required" },
        { status: 400 }
      );
    }

    const users = await getUsersByUniversity(university);
    return NextResponse.json({ count: users.length, users });
  } catch (error: any) {
    console.error("Error in /api/cfusers:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
