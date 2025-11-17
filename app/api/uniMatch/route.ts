import { NextResponse } from "next/server";

const BATCH_SIZE = 100;
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

  const queryUniversity = searchParams.get("university")?.trim().toLowerCase();
  const university = queryUniversity;

  const start = Number(searchParams.get("start") || "0");

  if (!university) {
    console.error("No university provided and DEFAULT_UNIVERSITY is empty");
    return NextResponse.json({ error: "University name is required" }, { status: 400 });
  }

  console.log(`Searching for university: "${university}"`);

  try {
    console.log(`Fetching users starting at index ${start}`);

    const res = await fetch(
      `https://codeforces.com/api/user.ratedList?activeOnly=${ACTIVE_ONLY}&start=${start}&count=${BATCH_SIZE}`,
      { cache: "no-store" }
    );
    const data: CFResponse = await res.json();

    if (data.status !== "OK") throw new Error("Codeforces API error");

    const matched = data.result.filter(
      (u) => u.organization?.toLowerCase().includes(university)
    );

    const nextStart = data.result.length === BATCH_SIZE ? start + BATCH_SIZE : null;

    return NextResponse.json({
      data: matched,
      nextStart,
      count: matched.length,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}