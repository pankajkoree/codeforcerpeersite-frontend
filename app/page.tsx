"use client";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";

interface CodeforcesUser {
  handle: string;
  organization?: string;
  rating?: number;
  rank?: string;
}

const PAGE_SIZE = 50;

export default function CodeforcesUsers() {
  const [page, setPage] = useState(0);

  // 🔹 Fetch once with React Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cf-users"],
    queryFn: async () => {
      const res = await fetch(`/api/batchRatedCFUsers?start=0`);
      if (!res.ok) throw new Error("Failed to fetch users");
      const json = await res.json();
      console.log("Fetched:", json);
      return json.data; // array of users
    },
    staleTime: Infinity, // data never goes stale
    gcTime: Infinity, // was 'cacheTime' in v4
  });

  // 🔹 Paginate locally
  const paginatedUsers = useMemo(() => {
    if (!data) return [];
    const start = page * PAGE_SIZE;
    return data.slice(start, start + PAGE_SIZE);
  }, [data, page]);

  // 🔹 Handle navigation
  const hasPrev = page > 0;
  const hasNext = data && (page + 1) * PAGE_SIZE < data.length;

  if (isLoading) return <p className="text-center mt-10">Loading users...</p>;
  if (isError) return <p className="text-center text-red-500 mt-10">Error fetching users</p>;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Codeforces Rated Users</h1>

      <ul className="space-y-2">
        {paginatedUsers.map((u) => (
          <li
            key={u.handle}
            className="p-3 border rounded shadow-sm hover:bg-gray-50 transition"
          >
            <div className="font-medium">{u.handle}</div>
            <div className="text-sm text-gray-500">
              {u.rank} — {u.rating}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          disabled={!hasPrev}
          onClick={() => setPage((p) => p - 1)}
          className={`px-4 py-2 rounded ${hasPrev
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
        >
          Prev
        </button>

        <span className="text-sm text-gray-600">
          Page {page + 1} of {Math.ceil((data?.length || 0) / PAGE_SIZE)}
        </span>

        <button
          disabled={!hasNext}
          onClick={() => setPage((p) => p + 1)}
          className={`px-4 py-2 rounded ${hasNext
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
        >
          Next
        </button>
      </div>

    </main>
  );
}
