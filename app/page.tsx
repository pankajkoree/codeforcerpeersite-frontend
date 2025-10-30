"use client";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";

interface CodeforcesUser {
  handle: string;
  organization?: string;
  rating?: number;
  rank?: string;
}

const PAGE_SIZE = 50;
const SKELETON_COUNT = 10;

export default function CodeforcesUsers() {
  const [page, setPage] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["cf-users"],
    queryFn: async () => {
      const res = await fetch(`/api/batchRatedCFUsers?start=0`);
      if (!res.ok) throw new Error("Failed to fetch users");
      const json = await res.json();
      console.log("Fetched:", json);
      return json.data;
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const paginatedUsers = useMemo(() => {
    if (!data) return [];
    const start = page * PAGE_SIZE;
    return data.slice(start, start + PAGE_SIZE);
  }, [data, page]);

  const hasPrev = page > 0;
  const hasNext = data && (page + 1) * PAGE_SIZE < data.length;

  return (
    <div className="max-w-full">
      <main className="p-6 mx-auto md:w-[70%]">
        <h1 className="text-2xl font-bold mb-4">Codeforces Rated Users</h1>

        <div className="grid grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
              <Card
                key={idx}
                className="animate-pulse h-24 bg-gray-200 rounded-lg"
              >
                {/* Skeleton content */}
              </Card>
            ))
            : paginatedUsers.map((user: CodeforcesUser) => (
              <Card key={user.handle} className="p-4">
                <p className="font-bold">{user.handle}</p>
                <p className="text-sm text-gray-500">{user.organization || "Unknown"}</p>
                <p className="text-sm">Rating: {user.rating ?? "N/A"}</p>
                <p className="text-sm">Rank: {user.rank ?? "N/A"}</p>
              </Card>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={!hasPrev}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={!hasNext}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
