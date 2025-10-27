"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCFUsers } from "@/hooks/useCFUsers";

export default function Home() {
  const [uniName, setUniName] = useState("");
  const { mutate, data, isPending, error } = useCFUsers();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uniName.trim()) return alert("Please enter a university name");
    mutate(uniName);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Get your university/college Codeforces users
      </h1>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Label className="mb-2">University or college name</Label>
        <Input
          type="text"
          placeholder="Eg: Stanford University"
          value={uniName}
          onChange={(e) => setUniName(e.target.value)}
        />
        <Button
          className="ml-4 mt-4"
          variant="ghost"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Fetching..." : "Get co-Uni Users"}
        </Button>
      </form>

      {error && <p className="text-red-500 mt-4">{error.message}</p>}

      {data && (
        <div className="mt-6">
          <p className="font-semibold">
            Found {data.count} users from {uniName}:
          </p>
          <ul className="mt-2 space-y-1">
            {data.users.map((u) => (
              <li key={u.handle} className="text-sm text-gray-700">
                {u.handle} — {u.organization ?? "N/A"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
