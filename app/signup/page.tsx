'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import getUsers from "@/lib/user/user"
import axios from "axios"
import { error } from "console"
import Image from "next/image"
import { useEffect, useState } from "react"

const Signup = () => {

    // const regiser = async () => {
    //     const response = await axios.post('https://codeforcerpeersite-backend.onrender.com/signup')
    // }


    return (
        // outer div
        <div className="max-w-full">
            {/* inner main div */}
            <main className="flex flex-col gap-4 justify-center items-center p-6 mx-auto md:w-[70%] border border-amber-400">
                {/* icon and heading*/}
                <div className="flex flex-col items-center text-xl">
                    <Image src="./logo.svg" width={50} height={50} alt="icon" />
                    <h1 className="font-bold">Signup</h1>
                    <p>Register your account</p>
                </div>

                {/* signup form */}
                <form action="" className="flex flex-col border border-red-300 gap-2 text-black">
                    {/* firstname */}
                    <div className="relative">
                        <Input
                            type="text"
                            id="firstname"
                            required
                            className="peer mt-2.5 w-full pt-0 tracking-[1px] text-[#6a2020] mb-[30px] border-b border-[#0c0909] outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300"
                        />
                        <Label
                            htmlFor="firstname"
                            className="absolute left-0 top-2.5 text-[16px] text-[#6a2020] pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-focus:text-[14px] peer-focus:text-[#55189f] peer-valid:-top-5 peer-valid:text-[14px] peer-valid:text-[#55189f]"
                        >
                            First Name
                        </Label>
                    </div>

                    {/* lastname */}
                    <div className="relative">
                        <Input
                            type="text"
                            id="firstname"
                            required
                            className="peer mt-2.5 w-full pt-0 tracking-[1px] text-[#6a2020] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300"
                        />
                        <Label
                            htmlFor="firstname"
                            className="absolute left-0 top-2.5 text-[16px] text-[#6a2020] pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-focus:text-[14px] peer-focus:text-[#55189f] peer-valid:-top-5 peer-valid:text-[14px] peer-valid:text-[#55189f]"
                        >
                            First Name
                        </Label>
                    </div>


                    <Button>Register</Button>

                </form>
            </main>
        </div>
    )
}

export default Signup