"use client";

import { useState, useEffect } from "react";
import { useCFUsers } from "@/hooks/useCFUsers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [university, setUniversity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
    hasNextPage,
  } = useCFUsers(university, submitted);

  const users = data?.pages.flatMap((page) => page.data) ?? [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFetchCompleted(false);
    setSubmitted(true);
    refetch();
  };

  // Keep fetching until no more pages
  useEffect(() => {
    if (!submitted || !data) return;

    const fetchAll = async () => {
      while (hasNextPage) {
        await fetchNextPage();
      }
      setFetchCompleted(true);
    };

    fetchAll();
  }, [data, submitted, hasNextPage, fetchNextPage]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Get your university/college Codeforces users
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Label>University or college name</Label>
        <Input
          type="text"
          placeholder="Eg: Stanford University"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
        <Button type="submit" disabled={isFetching}>
          {isFetching ? "Fetching..." : "Search"}
        </Button>
      </form>

      {submitted && (isFetching || isFetchingNextPage) && (
        <p className="mt-4 text-gray-500 animate-pulse">
          Fetching users… ({users.length} found so far)
        </p>
      )}

      {fetchCompleted && (
        <p className="mt-4 text-green-600 font-semibold">
          ✅ Completed fetching {users.length} users.
        </p>
      )}

      {users.length > 0 && (
        <ul className="mt-6 space-y-1 max-h-[400px] overflow-y-auto">
          {users.map((u) => (
            <li key={u.handle}>
              {u.handle} — <span className="text-gray-500">{u.organization}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
