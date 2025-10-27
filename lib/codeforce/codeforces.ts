import fetch from "node-fetch";

export interface CodeforcesUser {
  handle: string;
  organization?: string;
  rating?: number;
  rank?: string;
  maxRank?: string;
  maxRating?: number;
  firstName?: string;
  lastName?: string;
  country?: string;
  city?: string;
  [key: string]: any;
}

// Define API response types
interface CodeforcesAPIResponse<T> {
  status: "OK" | "FAILED";
  comment?: string;
  result: T;
}

const BATCH_SIZE = 100;
const ACTIVE_ONLY = false;
const DELAY_MS = 500;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getUsersByUniversity(
  universityName: string
): Promise<CodeforcesUser[]> {
  console.log("Fetching Codeforces rated users...");

  // 1️⃣ Type the rated list response
  const listRes = await fetch(
    `https://codeforces.com/api/user.ratedList?activeOnly=${ACTIVE_ONLY}`
  );
  const listJson = (await listRes.json()) as CodeforcesAPIResponse<
    CodeforcesUser[]
  >;

  if (listJson.status !== "OK") {
    throw new Error(listJson.comment || "Failed to fetch rated list");
  }

  const handles: string[] = listJson.result.map((u) => u.handle);
  console.log(`Total handles fetched: ${handles.length}`);

  const matchedUsers: CodeforcesUser[] = [];

  // 2️⃣ Loop through handles in batches
  for (let i = 0; i < handles.length; i += BATCH_SIZE) {
    const batch = handles.slice(i, i + BATCH_SIZE);
    const handlesParam = batch.join(";");

    try {
      const res = await fetch(
        `https://codeforces.com/api/user.info?handles=${handlesParam}`
      );
      const data = (await res.json()) as CodeforcesAPIResponse<
        CodeforcesUser[]
      >;

      if (data.status !== "OK") continue;

      const filtered = data.result.filter(
        (u) =>
          u.organization &&
          u.organization.toLowerCase().includes(universityName.toLowerCase())
      );

      matchedUsers.push(...filtered);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(
          `Error fetching batch ${i / BATCH_SIZE + 1}:`,
          err.message
        );
      } else {
        console.error(`Unknown error in batch ${i / BATCH_SIZE + 1}`);
      }
    }

    await delay(DELAY_MS);
  }

  return matchedUsers;
}
