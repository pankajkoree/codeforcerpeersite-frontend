'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/AuthContext"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

const Login = () => {
    const router = useRouter()
    const { login, user, isLoading } = useAuth()
    const [loginCredentials, setLoginCredentials] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await login(loginCredentials.email, loginCredentials.password)
            toast.success("successfully logged in")
            if (user) {
                router.push(`/profile/${user?._id}`)
            }

        } catch (error) {
            toast.error("invalid credentials")
        }
    }



    return (
        <div className="w-screen min-h-[calc(100dvh-120px)] grid place-items-center overflow-x-hidden overflow-y-auto">
            <main className="flex flex-col gap-4 justify-center items-center p-6 md:w-[70%]">
                {/* icons and headings */}
                <div className="flex flex-col items-center text-xl">
                    <Image src="./logo.svg" width={50} height={50} alt="icon" />
                    <h1 className="font-bold">Login</h1>
                    <p>Login to your account</p>
                </div>

                {/* login form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col text-[#55189f] w-[30%] text-sm"
                >

                    {/* email */}
                    <div className="relative">
                        <Input
                            type="email"
                            id="email"
                            value={loginCredentials.email}
                            required
                            className="peer mt-4 w-full pt-0 tracking-[1px] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300 rounded-sm"
                            onChange={(e) => setLoginCredentials({ ...loginCredentials, email: e.target.value })}
                        />
                        <Label
                            htmlFor="email"
                            className="absolute left-2 top-7 pointer-events-none transition-all duration-500 peer-focus:-top-1.5 peer-valid:-top-1.5 "
                        >
                            Email
                        </Label>
                    </div>

                    {/* password */}
                    <div className="relative">
                        <Input
                            type="password"
                            id="password"
                            value={loginCredentials.password}
                            required
                            className="peer mt-0 w-full pt-0 tracking-[1px] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300 rounded-sm"
                            onChange={(e) => setLoginCredentials({ ...loginCredentials, password: e.target.value })}
                        />
                        <Label
                            htmlFor="password"
                            className="absolute left-2 top-3 pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-valid:-top-5 "
                        >
                            Password
                        </Label>

                    </div>

                    <Button variant="signup" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</Button>

                    <section className="flex gap-2 justify-center mt-2">
                        Don't have an account ?
                        <Link href="/signup">Signup </Link>
                    </section>

                </form>
            </main>
        </div>
    )
}

export default Login