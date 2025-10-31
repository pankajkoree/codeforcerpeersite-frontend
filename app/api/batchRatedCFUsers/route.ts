import { NextResponse } from "next/server";

const PAGE_SIZE = 52;
const ACTIVE_ONLY = false;

interface CodeforcesUser {
  handle: string;
  organization?: string;
  rating?: number;
  rank?: string;
}

interface CFResponse {
  status: string;
  result: CodeforcesUser[];
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const start = Number(searchParams.get("start") || "0");

  try {
    const res = await fetch(
      `https://codeforces.com/api/user.ratedList?activeOnly=${ACTIVE_ONLY}&start=${start}&count=${PAGE_SIZE}`,
      { cache: "no-store" }
    );

    const data: CFResponse = await res.json();

    if (data.status !== "OK") throw new Error("Codeforces API error");

    const nextStart = data.result.length === PAGE_SIZE ? start + PAGE_SIZE : null;

    return NextResponse.json({
      data: data.result,
      nextStart,
    });
  } catch (err) {
    console.error("Error fetching Codeforces users:", err);
    return NextResponse.json(
      { error: "Failed to fetch Codeforces users" },
      { status: 500 }
    );
  }
}
