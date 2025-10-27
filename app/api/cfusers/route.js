import { NextResponse } from "next/server";
import { getUsersByUniversity } from "@/lib/codeforce/codeforces";

export async function POST(req) {
  try {
    const { university } = await req.json();

    if (!university) {
      return NextResponse.json(
        { error: "University name required" },
        { status: 400 }
      );
    }

    const users = await getUsersByUniversity(university);
    return NextResponse.json({ count: users.length, users });
  } catch (err) {
    console.error("Error in /api/cfusers:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
