"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

interface CodeforceContest {
  id: number;
  name: string;
  type: string;
  phase: string;
  durationSeconds: string;
}

const PAGE_SIZE = 24;
const SKELETON_COUNT = 12;
export default function Contest() {
  const [page, setPage] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await fetch("https://codeforces.com/api/contest.list");
      if (!res.ok) throw new Error("failed to fetch contests");
      const json = await res.json();
      return json.result;
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const paginatedContests = useMemo(() => {
    if (!data) return [];
    const start = page * PAGE_SIZE;
    return data.slice(start, start + PAGE_SIZE);
  }, [data, page]);

  const hasPrev = page > 0;
  const hasNext = data && (page + 1) * PAGE_SIZE < data.length;


  console.log(paginatedContests);
  return (
    <div className="max-w-full">
      <main className="p-6 mx-auto md:w-[70%]">
        {/* heading */}
        <h1 className="text-2xl font-bold mb-4 text-center">
          A list of contests in codeforce
        </h1>

        {/* table for contest display */}
        <table className="flex flex-col gap-2">
          <thead>
            <tr className="grid grid-cols-[10%_40%_10%_20%_20%] text-left px-4 py-2 gap-4">
              <th>S.No.</th>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-4">
            {isLoading
              ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                <tr key={idx} className="animate-pulse h-8 bg-gray-200 rounded-lg gap-4">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))
              : paginatedContests.map(
                (contest: CodeforceContest, index: number) => (
                  <tr key={contest.id} className="grid grid-cols-[10%_40%_10%_20%_20%] border px-4 py-2 hover:bg-gray-100 gap-4 rounded-sm hover:shadow-md hover:shadow-blue-300">
                    <td>{(page * PAGE_SIZE) + index + 1}</td>
                    <td>{contest.name}</td>
                    <td>{contest.type}</td>
                    <td>{
                      contest.phase === "BEFORE"
                        ? "Upcoming"
                        : contest.phase === "CODING"
                          ? "Ongoing"
                          : contest.phase === "PENDING_SYSTEM_TEST"
                            ? "Finalizing results"
                            : contest.phase === "FINISHED" ?
                              "Completed" : contest.phase

                    }</td>
                    <td>{Number(contest.durationSeconds) / 60 / 60}{" "}{'hours'}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>

        {/* pagination */}
        <div className="flex justify-between mt-6 mb-12">
          <Button
            onClick={() => setPage((p) => p - 1)}
            disabled={!hasPrev}
            className="px-4 py-2 rounded disabled:opacity-50 hover:cursor-pointer">
            Prev
          </Button>
          <Button
            onClick={() => setPage((p) => p + 1)}
            disabled={!hasNext}
            className="px-4 py-2 rounded disabled:opacity-50 hover:cursor-pointer">Next</Button>
        </div>
      </main>
    </div>
  );
}
