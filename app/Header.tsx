import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth();
  const router = useRouter();

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await logout();
      toast.success("logged out successfully");
      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("logout failed");
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b-2 border-gray-400">
      <nav className="flex justify-between items-center w-[80%] mx-auto px-8 py-4 backdrop-blur-lg">
        {/* left nav */}
        <div className="flex gap-16 items-center text-xl">
          {/* logo */}
          <Link href="/">
            <div className="flex gap-1">
              {/* svg logo */}
              <div className="flex items-center">
                <svg
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
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
              <h1 className="text-3xl font-semibold text-black">
                CodeforceMates
              </h1>
            </div>
          </Link>

          <div className="flex gap-4">
            {/* home nav */}
            <Link href="/" className="hover:border-b-2 hover:border-blue-400">
              Home
            </Link>

            {/* contests nav */}
            <Link
              href="/contests"
              className="hover:border-b-2 hover:border-blue-400"
            >
              Contests
            </Link>

            {/* university mates */}
            <Link
              href="/universitymates"
              className="hover:border-b-2 hover:border-blue-400"
            >
              Mates
            </Link>
          </div>
        </div>
        {/* left nav */}

        {/* right nav */}
        <div className="flex gap-4 items-center">
          {/* profile nav */}
          <div
            className="flex gap-2 items-center hover:cursor-pointer rounded-sm hover:bg-blue-400 hover:text-white px-2 py-2 group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {/* user icon */}
            {user ? (
              <Image
                src="https://cdn.pixabay.com/photo/2022/09/23/02/56/face-7473499_1280.png"
                width={20}
                height={20}
                alt="imageafteruser"
                className="rounded-full"
              />
            ) : (
              <svg
                fill="none"
                stroke="currentColor"
                width="25px"
                height="20px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-gray-800 group-hover:stroke-white"
              >
                <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zM5.16 13.67A2.84 2.84 0 0 1 8 11.51a2.82 2.82 0 0 1 2.84 2.16 7.24 7.24 0 0 1-5.68 0zm6.84-.61a4.09 4.09 0 0 0-4-2.77 4.09 4.09 0 0 0-3.95 2.78A6.14 6.14 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.11 6.11 0 0 1 12 13.06z" />
                <path d="M8.05 4.3A2.33 2.33 0 0 0 5.8 6.7a2.33 2.33 0 0 0 2.25 2.4 2.33 2.33 0 0 0 2.25-2.4 2.33 2.33 0 0 0-2.25-2.4zm0 3.55a1.08 1.08 0 0 1-1-1.15 1.08 1.08 0 0 1 1-1.15 1.08 1.08 0 0 1 1 1.15 1.08 1.08 0 0 1-1 1.15z" />
              </svg>
            )}
            {/* link for login */}
            {user ? (
              <Link href={`/profile/${user.name}+${user._id}`}>
                {user.name}
              </Link>
            ) : (
              <Link href="/login">Login</Link>
            )}

            {/* icon for arrow */}
            <svg
              fill="none"
              height="15px"
              width="15px"
              fontWeight="800"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              viewBox="0 0 511.787 511.787"
              className="stroke-gray-800 group-hover:stroke-white stroke-100 duration-300 ease-in-out group-hover:rotate-180"
            >
              <g>
                <g>
                  <path
                    d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213
			c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333
			C512.827,136.693,512.827,129.867,508.667,125.707z"
                  />
                </g>
              </g>
            </svg>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="absolute flex flex-col w-60 shadow-md shadow-blue-200 border border-green-200 bg-conic-90 from-gray-100 via-zinc-200 to-gray-100 z-50 right-8 top-15 rounded-sm font-semibold"
              >
                {/* signup */}

                {!user ? (
                  <Link
                    href="/signup"
                    className="flex justify-between hover:cursor-pointer hover:bg-gray-300 rounded-tl-sm rounded-tr-sm px-4 py-2"
                  >
                    <span>New user?</span>
                    <button className="hover:cursor-pointer">Signup</button>
                  </Link>
                ) : (
                  <button
                    className="flex justify-between hover:cursor-pointer hover:bg-gray-300 rounded-tl-sm rounded-tr-sm px-4 py-2"
                    onClick={handleLogout}
                  >
                    <span className="hover:cursor-pointer">Logout</span>
                  </button>
                )}

                {/* forgot password */}
                <Link
                  href="/forgotPassword"
                  className="hover:cursor-pointer hover:bg-gray-300 px-4 py-2"
                >
                  Forgot Password
                </Link>

                {/* profile */}
                {user ? (
                  <Link
                    href={`/profile/${user.name}+${user._id}`}
                    className="hover:cursor-pointer hover:bg-gray-300 px-4 py-2"
                  >
                    Profile
                  </Link>
                ) : (
                  <p className="hover:cursor-pointer hover:bg-gray-300 px-4 py-2">
                    Profile
                  </p>
                )}

                {/* mates */}
                <Link
                  href="/universitymates"
                  className="hover:cursor-pointer hover:bg-gray-300 rounded-bl-sm rounded-br-sm px-4 py-2"
                >
                  Mates
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* end right nav */}
      </nav>
    </div>
  );
};

export default Header;
