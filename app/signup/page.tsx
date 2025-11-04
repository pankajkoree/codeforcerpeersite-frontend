'use client'

import getUsers from "@/lib/user/user"
import axios from "axios"
import { error } from "console"
import { useEffect, useState } from "react"

const Signup = async () => {

    const regiser = async () => {
        const response = await axios.post('https://codeforcerpeersite-backend.onrender.com/user')
    }


    return (
        <div>
            <h1>signup page</h1>
        </div>
    )
}

export default Signup