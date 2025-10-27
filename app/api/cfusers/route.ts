import { NextResponse } from "next/server";

const BATCH_SIZE = 1000;
const ACTIVE_ONLY = true;

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
    // ✅ Disable caching for large responses
    const res = await fetch(
      `https://codeforces.com/api/user.ratedList?activeOnly=${ACTIVE_ONLY}&start=${start}&count=${BATCH_SIZE}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch Codeforces data");

    const data: CFResponse = await res.json();

    if (data.status !== "OK") {
      throw new Error("Codeforces API error");
    }

    const matched = data.result.filter((user) => {
      const org = user.organization?.toLowerCase().trim();
      return org === university; // exact lowercase match
    });

    const nextStart = data.result.length === BATCH_SIZE ? start + BATCH_SIZE : null;

    return NextResponse.json({
      data: matched,
      nextStart,
    });
  } catch (error) {
    console.error("Error fetching Codeforces users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
