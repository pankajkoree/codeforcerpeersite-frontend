"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState, useMemo } from "react";

interface CodeforcesUser {
  avatar: string,
  handle: string;
  organization?: string;
  rating?: number;
  rank?: string;
}

const PAGE_SIZE = 52;
const SKELETON_COUNT = 12;

export default function CodeforcesUsers() {
  const [page, setPage] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["cf-users"],
    queryFn: async () => {
      const res = await fetch(`/api/batchRatedCFUsers?start=0`);
      if (!res.ok) throw new Error("Failed to fetch users");
      const json = await res.json();
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
        <h1 className="text-2xl font-bold mb-4 text-center">Codeforces Rated Users</h1>

        <div className="grid grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
              <Card
                key={idx}
                className="animate-pulse h-48 bg-gray-200 rounded-lg gap-4"
              >

              </Card>
            ))
            : paginatedUsers.map((user: CodeforcesUser) => (
              <Card key={user.handle} className="p-4 hover:cursor-pointer bg-gray-100 hover:shadow-lg hover:shadow-blue-300">
                <div className="flex justify-between">
                  <Image src={user?.avatar} width={48} height={48} alt={user.avatar} />
                  <p className="font-bold text-xl">{user.handle}</p>
                </div>
                <p className="text-lg text-gray-500">{user.organization || "Unknown"}</p>
                <p className="text-sm">Rating: {user.rating ?? "N/A"}</p>
              </Card>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-6 mb-12">
          <Button
            onClick={() => setPage((p) => p - 1)}
            disabled={!hasPrev}
            className="px-4 py-2 rounded disabled:opacity-50 hover:cursor-pointer"
          >
            Prev
          </Button>
          <Button
            onClick={() => setPage((p) => p + 1)}
            disabled={!hasNext}
            className="px-4 py-2 rounded disabled:opacity-50 hover:cursor-pointer"
          >
            Next
          </Button>
        </div>
      </main>
    </div>
  );
}
