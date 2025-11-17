"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

interface CodeforcesUser {
  avatar: string;
  handle: string;
  organization?: string;
  rating: number;
  rank?: string;
  maxRating: number;
  friendOfCount: number;
  country: string;
}

const PAGE_SIZE = 52;

const universitymates = () => {
  const [page, setPage] = useState(0);
  const { user } = useAuth();

  const university = user?.university;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["uniMatchedUsers", university],
    queryFn: async () => {
      if (!university) throw new Error("University name is required");

      let allUsers: CodeforcesUser[] = [];
      let start = 0;
      let hasMore = true;

      while (hasMore) {
        const res = await fetch(
          `/api/uniMatch?university=${encodeURIComponent(university)}&start=${start}`
        );
        if (!res.ok)
          throw new Error("Failed to fetch university matched users");

        const json = await res.json();
        allUsers = [...allUsers, ...json.data];

        if (json.nextStart !== null) {
          start = json.nextStart;
        } else {
          hasMore = false;
        }
      }

      console.log(`Total matched users found: ${allUsers.length}`);
      return allUsers;
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const uniMatchUsers = useMemo(() => {
    if (!data) return [];
    const start = page * PAGE_SIZE;
    return data.slice(start, start + PAGE_SIZE);
  }, [data, page]);

  const hasPrev = page > 0;
  const hasNext = data && (page + 1) * PAGE_SIZE < data.length;

  console.log("Current page users:", uniMatchUsers);
  console.log("Total users:", data?.length || 0);
  console.log("Current page:", page);

  // Show message if no university is set
  if (!university) {
    return (
      <div className="max-w-full">
        <main className="p-6 mx-auto md:w-[70%]">
          <h1>Please set your university in your profile</h1>
        </main>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-full">
        <main className="p-6 mx-auto md:w-[70%]">
          <h1>Loading university mates from {university}...</h1>
        </main>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-full">
        <main className="p-6 mx-auto md:w-[70%]">
          <h1>Error loading data</h1>
          <p className="text-red-500">{error?.message}</p>
        </main>
      </div>
    );
  }

  return (
    <div className="max-w-full">
      <main className="p-6 mx-auto md:w-[70%]">
        <h1>University Mates from {university} ({data?.length || 0} total)</h1>

        {/* Display users */}
        <div className="my-6">
          {uniMatchUsers.length === 0 ? (
            <p>No users found for this university</p>
          ) : (
            <div className="grid gap-4">
              {uniMatchUsers.map((user) => (
                <div key={user.handle} className="p-4 border rounded">
                  <p className="font-bold">{user.handle}</p>
                  <p>Rating: {user.rating}</p>
                  <p>Rank: {user.rank}</p>
                  <p>Organization: {user.organization}</p>
                </div>
              ))}
            </div>
          )}
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
          <span className="self-center">
            Page {page + 1} of {Math.ceil((data?.length || 0) / PAGE_SIZE)}
          </span>
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
};

export default universitymates;