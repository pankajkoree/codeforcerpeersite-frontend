"use client";

import { useState, useEffect } from "react";
import { useCFUsers } from "@/hooks/useCFUsers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [university, setUniversity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
  } = useCFUsers(university, submitted);

  const users = data?.pages.flatMap((page) => page.data) ?? [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Automatically fetch all pages
  useEffect(() => {
    if (!submitted) return;
    if (!data?.pages) return;

    const nextStart = data.pages[data.pages.length - 1].nextStart;
    if (nextStart != null) {
      fetchNextPage();
    }
  }, [data, submitted, fetchNextPage]);

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
        <Button type="submit" variant="default">
          Search
        </Button>
      </form>

      {submitted && (isFetching || isFetchingNextPage) && (
        <p className="mt-4 text-gray-500">
          Fetching users… ({users.length} found so far)
        </p>
      )}

      {users.length > 0 && (
        <ul className="mt-6 space-y-1">
          {users.map((u) => (
            <li key={u.handle}>
              {u.handle} ({u.organization})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
