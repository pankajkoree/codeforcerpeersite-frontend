"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (newPassword.length < 8) {
      setLoading(false);
      return;
    }

    try {
      const response = axios.post(
        "https://codeforcerpeersite-backend.onrender.com/forgotPassword",
        { identifier, newPassword }
      );
      if (await response) {
        toast.success("password reset successful");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (err) {
      console.error("Reset password error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen min-h-[calc(100dvh-120px)] grid place-items-center overflow-x-hidden overflow-y-auto">
      <main className="w-[50%] grid place-items-center">
        <section className="flex flex-col gap-8 items-center py-8 px-10 bg-linear-150 from-[#e7e7de] via-gray-200 to-gray-300 shadow-md shadow-gray-600 rounded-sm w-[50%]">
          {/* icons and headings */}
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
            <h1 className="font-bold">Reset Password</h1>
            <p className="text-center">Enter credentials to reset password</p>
          </div>

          {/* reset form */}
          <form
            onSubmit={handleResetPassword}
            className="flex flex-col text-[#55189f] text-sm w-full"
          >
            {/* identifier */}
            <div className="relative">
              <Input
                type="text"
                id="identifier"
                value={identifier}
                required
                className="peer mt-4 w-full pt-0 tracking-[1px] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300 rounded-sm"
                onChange={(e) => setIdentifier(e.target.value)}
              />
              <Label
                htmlFor="identifier"
                className="absolute left-2 top-7 pointer-events-none transition-all duration-500 peer-focus:-top-1.5 peer-valid:-top-1.5 "
              >
                Email or username
              </Label>
            </div>

            {/* password */}
            <div className="relative">
              <Input
                type="password"
                id="newPassword"
                value={newPassword}
                required
                className="peer mt-0 w-full pt-0 tracking-[1px] mb-[30px] border-2 border-blue-200 outline-none bg-transparent focus:border-[#55189f] transition-colors duration-300 rounded-sm"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Label
                htmlFor="newPassword"
                className="absolute left-2 top-3 pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-valid:-top-5 "
              >
                New Password
              </Label>
            </div>

            <Button variant="signup" disabled={loading}>
              {loading ? "Resetting the password" : "Reset Password"}
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
