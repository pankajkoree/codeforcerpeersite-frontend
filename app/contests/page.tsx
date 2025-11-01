'use client'

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query"
import { useMemo, useState } from "react"

interface CodeforceContest {
    name: string;
    type: string;
    status: string;
    duration: string;
}

const PAGE_SIZE = 24
const SKELETON_COUNT = 12
export default function Contest() {
    const [page, setPage] = useState(0)

    const { data, isLoading, isError } = useQuery({
        queryKey: ["contests"],
        queryFn: async () => {
            const res = await fetch('https://codeforces.com/api/contest.list')
            if (!res.ok) throw new Error("failed to fetch contests")
            const json = await res.json()
            return json.result;
        },
        staleTime: Infinity,
        gcTime: Infinity,
    })

    const paginatedContests = useMemo(() => {
        if (!data) return []
        const start = page * PAGE_SIZE
        return data.slice(start, start + PAGE_SIZE)
    }, [data, page])

    const hasPrev = page > 0;
    const hasNext = data && (page + 1) * PAGE_SIZE < data.length;

    console.log(paginatedContests)
    return (
        <div className="max-w-full">
            <main className="p-6 mx-auto md:w-[70%]">
                {/* heading */}
                <h1 className="text-2xl font-bold mb-4 text-center">A list of contests in codeforce</h1>

                {/* table for contest display */}
                <table className="">
                    <thead>
                        <tr className="flex gap-2 border-2 border-red-400">
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    {
                        isLoading ? Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                            <tbody key={idx} className="animate-pulse h-8 bg-gray-200 rounded-lg gap-4">
                                <tr>
                                    <td>

                                    </td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        )) :
                            <tbody>
                                <tr>
                                    <td>Data loaded</td>
                                </tr>
                            </tbody>
                    }
                </table>

                {/* pagination */}
                <div className="flex justify-between mt-6 mb-12">
                    <Button onClick={() => setPage((p) => p-1)}
                        disabled={!hasPrev}
                        >Prev</Button>
                    <Button>Next</Button>
                </div>
            </main>
        </div>
    )
}