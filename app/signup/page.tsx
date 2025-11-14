"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
    const router = useRouter()
    const [error, setError] = useState("");

    const [users, setUsers] = useState({
        name: "",
        cfusername: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        university: "",
        country: "",
    });
    const [newUsers, setNewUsers] = useState({
        name: "",
        cfusername: "",
        email: "",
        password: "",
        gender: "",
        university: "",
        country: "",
    });

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const confirmPassword = e.target.value;
        setUsers({ ...users, confirmPassword })
        if (confirmPassword !== users.password) {
            setError("passwords not matched")
        } else {
            setError("")
        }
    }
    useEffect(() => {
        if (users.password && users.confirmPassword && users.password === users.confirmPassword) {
            setNewUsers({
                name: users.name,
                cfusername: users.cfusername,
                email: users.email,
                password: users.password,
                gender: users.gender,
                university: users.university,
                country: users.country,
            })
        }
    }, [users])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = axios.post('https://codeforcerpeersite-backend.onrender.com/register', newUsers)
            toast.success("Successfully signed up")
            router.push("/login")
        } catch (error) {
            toast.error("unable to register")
        }
    };

    return (
        // outer div
        <div className="w-screen min-h-[calc(100dvh-120px)] grid place-items-center overflow-x-hidden overflow-y-auto">
            <main className="flex flex-col gap-4 justify-center items-center p-6 md:w-[70%]">
                {/* content */}
                {/* icon and heading*/}
                <div className="flex flex-col items-center text-xl">
                    <Image src="./logo.svg" width={50} height={50} alt="icon" />
                    <h1 className="font-bold">Signup</h1>
                    <p>Register your account</p>
                </div>

                {/* signup form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col text-[#55189f] w-[30%]"
                >
                    {/* name */}
                    <div className="flex top-4 relative">
                        <Input
                            type="text"
                            id="name"
                            value={users.name}
                            required
                            className="peer mt-4 w-full pt-0 tracking-[1px] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300 rounded-sm"
                            onChange={(e) => setUsers({ ...users, name: e.target.value })}
                        />
                        <Label
                            htmlFor="name"
                            className="absolute left-2 top-7 pointer-events-none transition-all duration-500 peer-focus:-top-2 peer-valid:-top-2 "
                        >
                            Name
                        </Label>
                    </div>

                    {/* cfusername */}
                    <div className="relative">
                        <Input
                            type="text"
                            id="cfusername"
                            value={users.cfusername}
                            required
                            className="peer mt-4 w-full pt-0 tracking-[1px] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300 rounded-sm"
                            onChange={(e) => setUsers({ ...users, cfusername: e.target.value })}
                        />
                        <Label
                            htmlFor="cfusername"
                            className="absolute left-2 top-7 pointer-events-none transition-all duration-500 peer-focus:-top-1.5 peer-valid:-top-1.5 "
                        >
                            Codeforce username
                        </Label>
                    </div>


                    {/* email */}
                    <div className="relative">
                        <Input
                            type="email"
                            id="email"
                            value={users.email}
                            required
                            className="peer mt-0 w-full pt-0 tracking-[1px] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300 rounded-sm"
                            onChange={(e) => setUsers({ ...users, email: e.target.value })}
                        />
                        <Label
                            htmlFor="email"
                            className="absolute left-2 top-3 pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-valid:-top-5 "
                        >
                            Email
                        </Label>
                    </div>

                    {/* password */}
                    <div className="relative">
                        <Input
                            type="password"
                            id="password"
                            value={users.password}
                            required
                            className="peer mt-0 w-full pt-0 tracking-[1px] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300 rounded-sm"
                            onChange={(e) => setUsers({ ...users, password: e.target.value })}
                        />
                        <Label
                            htmlFor="password"
                            className="absolute left-2 top-3 pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-valid:-top-5"
                        >
                            Password
                        </Label>
                    </div>

                    {/* Confirm password */}
                    <div className="relative">
                        <Input
                            type="password"
                            id="confirmPassword"
                            value={users.confirmPassword}
                            required
                            className="peer mt-0 w-full pt-0 tracking-[1px] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300 rounded-sm"
                            onChange={handleConfirmPassword}
                        />
                        <Label
                            htmlFor="confirmPassword"
                            className="absolute left-2 top-3 pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-valid:-top-5"
                        >
                            Confirm password
                        </Label>
                        <h1 className="text-sm text-red-500">{error}</h1>
                    </div>

                    {/* gender */}
                    <div className="-mt-2 mb-6 ml-2 font-semibold">
                        <p className="mb-2">Gender</p>
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="appearance-none w-4 h-4 border border-[#55189f] rounded-full checked:bg-[#55189f] checked:ring-2 checked:ring-[#a073e8] transition-all duration-200"
                                    onChange={(e) =>
                                        setUsers({ ...users, gender: e.target.value })
                                    }
                                    required
                                />
                                <span>Male</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="appearance-none w-4 h-4 border border-[#55189f] rounded-full checked:bg-[#55189f] checked:ring-2 checked:ring-[#a073e8] transition-all duration-200"
                                    onChange={(e) =>
                                        setUsers({ ...users, gender: e.target.value })
                                    }
                                    required
                                />
                                <span>Female</span>
                            </label>
                        </div>
                    </div>

                    {/* university */}
                    <div className="relative">
                        <Input
                            type="text"
                            id="university"
                            value={users.university}
                            required
                            className="peer mt-0 w-full pt-0 tracking-[1px] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300 rounded-sm"
                            onChange={(e) =>
                                setUsers({ ...users, university: e.target.value })
                            }
                        />
                        <Label
                            htmlFor="university"
                            className="absolute left-2 top-3 pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-valid:-top-5"
                        >
                            University
                        </Label>
                    </div>

                    {/* country */}
                    <div className="relative">
                        <Input
                            type="text"
                            id="country"
                            value={users.country}
                            required
                            className="peer mt-0 w-full pt-0 tracking-[1px] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300 rounded-sm"
                            onChange={(e) =>
                                setUsers({ ...users, country: e.target.value })
                            }
                        />
                        <Label
                            htmlFor="country"
                            className="absolute left-2 top-3 pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-valid:-top-5"
                        >
                            Country
                        </Label>
                    </div>

                    <Button variant="signup">Register</Button>

                    <section className="flex gap-2 justify-center mt-2">
                        Already have an account ?
                        <Link href="/login">Login </Link>
                    </section>
                </form>
            </main>
        </div>
    );
};

export default Signup;
