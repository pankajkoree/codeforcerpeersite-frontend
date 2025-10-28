import { useInfiniteQuery } from "@tanstack/react-query";

interface CFUser {
  handle: string;
  organization?: string;
  rating?: number;
  rank?: string;
}

interface CFPage {
  data: CFUser[];
  nextStart: number | null;
}

export function useCFUsers(university: string, enabled: boolean) {
  return useInfiniteQuery<CFPage, Error>({
    queryKey: ["cfUsers", university],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await fetch(
        `/api/cfusers?start=${pageParam}&university=${encodeURIComponent(
          university
        )}`
      );
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    },
    getNextPageParam: (lastPage) => lastPage.nextStart,
    enabled,
    initialPageParam: 0,
  });
}
