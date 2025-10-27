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
        `/api/cfusers?start=${pageParam}&university=${university}`
      );
      if (!res.ok) throw new Error("Failed to fetch users");
      const json = await res.json();
      return json as CFPage;
    },
    getNextPageParam: (lastPage) => lastPage.nextStart,
    enabled, // controlled manually
    initialPageParam: 0,
  });
}
