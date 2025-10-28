import { NextResponse } from "next/server";

const BATCH_SIZE = 1000;
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
  const university = searchParams.get("university")?.trim().toLowerCase() || "";

  try {
    const res = await fetch(
      `https://codeforces.com/api/user.ratedList?activeOnly=${ACTIVE_ONLY}&start=${start}&count=${BATCH_SIZE}`,
      { cache: "no-store" }
    );

    const data: CFResponse = await res.json();
    if (data.status !== "OK") throw new Error("CF API error");

    const matched = data.result.filter((user) =>
      user.organization?.toLowerCase().includes(university)
    );

    const nextStart =
      data.result.length === BATCH_SIZE ? start + BATCH_SIZE : null;

    return NextResponse.json({ data: matched, nextStart });
  } catch (err) {
    console.error("Error fetching Codeforces users:", err);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
