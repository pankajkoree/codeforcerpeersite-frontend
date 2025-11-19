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
  const router = useRouter();
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
    setUsers({ ...users, confirmPassword });
    if (confirmPassword !== users.password) {
      setError("passwords not matched");
    } else {
      setError("");
    }
  };
  useEffect(() => {
    if (
      users.password &&
      users.confirmPassword &&
      users.password === users.confirmPassword
    ) {
      setNewUsers({
        name: users.name,
        cfusername: users.cfusername,
        email: users.email,
        password: users.password,
        gender: users.gender,
        university: users.university,
        country: users.country,
      });
    }
  }, [users]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = axios.post(
        "https://codeforcerpeersite-backend.onrender.com/register",
        newUsers
      );
      toast.success("Successfully signed up");
      router.push("/login");
    } catch (error) {
      toast.error("unable to register");
    }
  };

  return (
    // outer div
    <div className="w-screen min-h-[calc(100dvh-120px)] grid place-items-center overflow-x-hidden overflow-y-auto">
      <main className="w-screen min-h-[calc(100dvh-120px)] md:w-[70%] grid place-items-center">
        <section className="flex flex-col gap-4 justify-center items-center py-2 px-6 bg-linear-150 from-[#e7e7de] via-gray-200 to-gray-300 shadow-md shadow-gray-600 rounded-sm w-[35%]">
          {/* content */}
          {/* icon and heading*/}
          <div className="flex flex-col items-center text-xl">
            <div className="flex items-center">
              <svg
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                className="w-13 h-13"
              >
                <defs>
                  <linearGradient
                    id="bgGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#667eea", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#764ba2", stopOpacity: 1 }}
                    />
                  </linearGradient>

                  <linearGradient
                    id="codeGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#f093fb", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#f5576c", stopOpacity: 1 }}
                    />
                  </linearGradient>

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <circle cx="200" cy="200" r="180" fill="url(#bgGradient)" />

                <g filter="url(#glow)">
                  <path
                    d="M 120 140 L 100 140 Q 85 140 85 155 L 85 245 Q 85 260 100 260 L 120 260"
                    stroke="#ffffff"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                  />

                  <path
                    d="M 280 140 L 300 140 Q 315 140 315 155 L 315 245 Q 315 260 300 260 L 280 260"
                    stroke="#ffffff"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                  />

                  <line
                    x1="220"
                    y1="140"
                    x2="180"
                    y2="260"
                    stroke="#ffffff"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </g>

                <g>
                  <line
                    x1="145"
                    y1="200"
                    x2="255"
                    y2="200"
                    stroke="#ffd700"
                    strokeWidth="4"
                    opacity="0.8"
                  />

                  <circle cx="145" cy="200" r="18" fill="#ffd700" />
                  <circle cx="145" cy="200" r="12" fill="#ffffff" />

                  <circle cx="255" cy="200" r="18" fill="#ffd700" />
                  <circle cx="255" cy="200" r="12" fill="#ffffff" />
                </g>

                <text
                  x="200"
                  y="320"
                  fontFamily="Arial, sans-serif"
                  fontSize="42"
                  fontWeight="bold"
                  fill="#ffffff"
                  textAnchor="middle"
                >
                  CODEFORCE
                </text>

                <text
                  x="200"
                  y="355"
                  fontFamily="Arial, sans-serif"
                  fontSize="32"
                  fontWeight="600"
                  fill="#ffd700"
                  textAnchor="middle"
                >
                  MATES
                </text>

                <g opacity="0.3">
                  <text
                    x="140"
                    y="90"
                    fontFamily="monospace"
                    fontSize="16"
                    fill="#ffffff"
                  >
                    {}
                  </text>
                  <text
                    x="245"
                    y="90"
                    fontFamily="monospace"
                    fontSize="16"
                    fill="#ffffff"
                  >
                    []
                  </text>
                  <text
                    x="60"
                    y="210"
                    fontFamily="monospace"
                    fontSize="16"
                    fill="#ffffff"
                  >
                    &lt;/&gt;
                  </text>
                  <text
                    x="320"
                    y="210"
                    fontFamily="monospace"
                    fontSize="16"
                    fill="#ffffff"
                  >
                    ( )
                  </text>
                </g>
              </svg>
            </div>
            <h1 className="font-bold">Signup</h1>
            <p>Register your account</p>
          </div>

          {/* signup form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-[#55189f] w-full"
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
                onChange={(e) =>
                  setUsers({ ...users, cfusername: e.target.value })
                }
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
                onChange={(e) =>
                  setUsers({ ...users, password: e.target.value })
                }
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
              Already have an account ?<Link href="/login">Login </Link>
            </section>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Signup;
