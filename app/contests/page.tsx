'use client'

import { useQuery } from "@tanstack/react-query"
import { useMemo, useState } from "react"

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
                <h1>hello</h1>
            </main>
        </div>
    )
}