"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
const SKELETON_COUNT = 12;

const universitymates = () => {
  const [page, setPage] = useState(0);
  const router = useRouter();
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
          `/api/uniMatch?university=${encodeURIComponent(
            university
          )}&start=${start}`
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

  if (!university) {
    return (
      <div className="max-w-full">
        <main className="p-6 mx-auto md:w-[70%] text-xl flex flex-col justify-center items-center">
          <h1>Please set your university in your profile</h1>
          <div className="flex gap-1 text-base">
            <p>Not logged in yet?</p>
            <Link href="/login" className="text-blue-400">
              {" "}
              Login
            </Link>
          </div>
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
        <div className="flex justify-center text-xl pb-4">
          <h1>
            University Mates from {university} ({data?.length || 0} total)
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                <Card key={idx} className="animate-pulse h-48 rounded-lg gap-4">
                  <p className="flex p-2 h-8 bg-gray-300"></p>
                  <p className="flex p-2 h-8 bg-gray-300"></p>
                </Card>
              ))
            : uniMatchUsers.map((user: CodeforcesUser) => (
                <div
                  className="flex bg-linear-to-br from-slate-50 to-slate-100 rounded-full"
                  key={user.handle}
                  onClick={() => router.push(`/universitymates/${user.handle}`)}
                >
                  <div className="group relative w-full max-w-sm bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border animate-border-color hover:border-2 hover:border-blue-400">
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-linear-to-r from-gray-600 to-orange-300 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md flex items-center gap-1">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      {(user.rating / 1000).toFixed(2) || "N/A"}
                    </div>

                    {/* Avatar and Info */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={user.avatar}
                          alt={user.handle}
                          className="w-16 h-16 rounded-full ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white"></div>
                      </div>

                      <div className="flex-1 pt-1">
                        <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                          {user.handle}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                          {user.organization || "Independent"}
                        </p>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex gap-4 pt-4 border-t border-slate-100">
                      <div className="flex-1 text-center">
                        <p className="text-2xl font-bold text-slate-900">
                          {user.maxRating}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          Max Rating
                        </p>
                      </div>
                      <div className="w-px bg-slate-200"></div>
                      <div className="flex-1 text-center">
                        <p className="text-2xl font-bold text-slate-900">
                          {user.friendOfCount}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">Friends</p>
                      </div>
                      <div className="w-px bg-slate-200"></div>
                      <div className="flex-1 text-center">
                        <p className="text-xl font-bold text-slate-900">
                          {user.country || "None"}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">Country</p>
                      </div>
                    </div>
                  </div>
                </div>
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
