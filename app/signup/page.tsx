'use client'

import getUsers from "@/lib/user/user"
import { error } from "console"
import { useEffect, useState } from "react"

const Signup = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(setUsers).catch(console.error)
    }, [])

    console.log(users)
    return (
        <div>
            <h1>signup page</h1>
        </div>
    )
}

export default Signup