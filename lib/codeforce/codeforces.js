// lib/codeforces.js
import fetch from "node-fetch";

const BATCH_SIZE = 100;
const ACTIVE_ONLY = false;
const DELAY_MS = 500;

// Helper to pause between requests
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function getUsersByUniversity(universityName) {
  console.log(`Fetching Codeforces rated users...`);

  const listRes = await fetch(
    `https://codeforces.com/api/user.ratedList?activeOnly=${ACTIVE_ONLY}`
  );
  const listJson = await listRes.json();

  if (listJson.status !== "OK") throw new Error("Failed to fetch rated list");

  const handles = listJson.result.map((u) => u.handle);
  console.log(`Total handles fetched: ${handles.length}`);

  const matchedUsers = [];

  for (let i = 0; i < handles.length; i += BATCH_SIZE) {
    const batch = handles.slice(i, i + BATCH_SIZE);
    const handlesParam = batch.join(";");

    try {
      const res = await fetch(
        `https://codeforces.com/api/user.info?handles=${handlesParam}`
      );
      const data = await res.json();
      if (data.status !== "OK") continue;

      const filtered = data.result.filter(
        (u) =>
          u.organization &&
          u.organization.toLowerCase().includes(universityName.toLowerCase())
      );

      matchedUsers.push(...filtered);
    } catch (err) {
      console.error(`Error fetching batch ${i / BATCH_SIZE + 1}:`, err.message);
    }

    await delay(DELAY_MS);
  }

  return matchedUsers;
}
