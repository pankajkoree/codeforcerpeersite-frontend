import { useMutation } from "@tanstack/react-query";
import type { CodeforcesUser } from "@/lib/codeforce/codeforces";

interface CFResponse {
  count: number;
  users: CodeforcesUser[];
}

export function useCFUsers() {
  return useMutation<CFResponse, Error, string>({
    mutationFn: async (university: string) => {
      const res = await fetch("/api/cfusers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ university }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      return res.json();
    },
  });
}
