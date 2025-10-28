export interface CodeforcesUser {
  handle: string;
  organization?: string;
  rating?: number;
  rank?: string;
}

interface CodeforcesAPIResponse<T> {
  status: "OK" | "FAILED";
  result: T;
  comment?: string;
}

const BATCH_SIZE = 100;

export async function fetchCFBatch(
  start: number,
  universityName: string
): Promise<CodeforcesUser[]> {
  const ratedListRes = await fetch(
    `https://codeforces.com/api/user.ratedList?activeOnly=false`
  );
  const ratedListJson = (await ratedListRes.json()) as CodeforcesAPIResponse<
    CodeforcesUser[]
  >;

  if (ratedListJson.status !== "OK") {
    throw new Error("Failed to fetch rated users list");
  }

  const handles = ratedListJson.result
    .slice(start, start + BATCH_SIZE)
    .map((u) => u.handle)
    .join(";");

  const userRes = await fetch(
    `https://codeforces.com/api/user.info?handles=${handles}`
  );
  const userJson = (await userRes.json()) as CodeforcesAPIResponse<
    CodeforcesUser[]
  >;

  if (userJson.status !== "OK") {
    throw new Error("Failed to fetch batch info");
  }

  const matched = userJson.result.filter(
    (u) =>
      u.organization &&
      u.organization.toLowerCase().includes(universityName.toLowerCase())
  );

  return matched;
}
