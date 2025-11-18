"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface User {
  _id: string;
  name: string;
  cfusername: string;
  email: string;
  gender: string;
  university: string;
  country: string;
  registeredOn: string;
}

export default function UniversityMatchedUserProfile({
  params,
}: {
  params: Promise<{ specificUniMatchedUser: string }>;
}) {
  const { specificUniMatchedUser } = use(params);
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const codeforceusername = specificUniMatchedUser;

  useEffect(() => {
    const fetchedResponse = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://codeforces.com/api/user.info?handles=${codeforceusername}`
        );
        if (!response.ok) {
          toast.error("failed to fetch matched user data");
        }
        const data = await response.json();
        console.log(data)

        if (data.status === "OK") {
          setUserData(data);
        }
      } catch (error) {
        toast.error("unable to fetch matched user details");
      } finally {
        setLoading(false);
      }
    };

    fetchedResponse();
  }, [codeforceusername]);

    const formatDate = (date?: string | Date) => {
    if (!date) return "";
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCountryCode = (countryName?: string) => {
    if (!countryName) return "";
    try {
      const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
      for (let i = 65; i <= 90; i++) {
        for (let j = 65; j <= 90; j++) {
          const code = String.fromCharCode(i) + String.fromCharCode(j);
          if (
            regionNames.of(code)?.toLowerCase() === countryName.toLowerCase()
          ) {
            return code.toLowerCase();
          }
        }
      }
    } catch {
      return "";
    }
    return "";
  };

  const [countryCode, setCountryCode] = useState<string>("");

  useEffect(() => {
    setCountryCode(getCountryCode(userData?.country));
  }, [userData]);

  console.log(userData)

  return (
    <div>
      <div className="flex items-start justify-center py-6 md:py-12 px-4">
      <main className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl">
        <section className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
          {/* Cover */}
          <div className="relative h-28 md:h-48 lg:h-52 w-full">
            <Image
              src="https://images.pexels.com/photos/683402/pexels-photo-683402.jpeg"
              alt="cover"
              fill
              style={{ objectFit: "cover" }}
              className="object-cover p-2 rounded-xl"
              priority
            />
          </div>

          {/* Main Content Area */}
          <div className="px-4 md:px-8 lg:px-12 pb-8">
            {/* Avatar - centered mobile, left-aligned tablet+ */}
            <div className="flex justify-center md:justify-start -mt-12 md:-mt-16 mb-4 md:mb-6">
              <div className="relative">
                {loading ? (
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-slate-800 bg-slate-700 animate-pulse"></div>
                ) : (
                  <>
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1714356333088-45a9ba618365?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0"
                      }
                      alt="avatar"
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-slate-800 shadow-lg object-cover w-24 h-24 md:w-32 md:h-32"
                    />
                    {/* Verified badge - kept like previous */}
                    <span className="absolute right-0 top-22 rounded-full shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="blue"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                      </svg>
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Header info */}
            <div className="text-center md:text-left">
              {loading ? (
                <>
                  <div className="h-8 md:h-10 bg-slate-700 rounded-lg animate-pulse w-3/4 md:w-1/2 mb-3"></div>
                  <div className="h-5 bg-slate-700 rounded-lg animate-pulse w-1/2 md:w-1/3"></div>
                </>
              ) : (
                <>
                  <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                    {userData?.name ?? "Guest User"}
                  </h2>
                  <p className="text-sm md:text-xl text-slate-400 mt-1">
                    {userData?.email ?? "no-email@example.com"}
                  </p>
                </>
              )}
            </div>

            {/* Form fields */}
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Grid for larger screens */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Name */}
                <div>
                  <label className="block text-md font-medium text-slate-400 mb-2">
                    Full Name
                  </label>
                  {loading ? (
                    <div className="h-11 bg-slate-700 rounded-lg animate-pulse"></div>
                  ) : (
                    <div className="bg-slate-700 text-white rounded-lg px-4 py-3 text-sm md:text-xl shadow-md">
                      {userData?.name ?? "-"}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-md font-medium text-slate-400 mb-2">
                    Email Address
                  </label>
                  {loading ? (
                    <div className="h-11 bg-slate-700 rounded-lg animate-pulse"></div>
                  ) : (
                    <div className="bg-slate-700 text-white rounded-lg px-4 py-3 text-sm md:text-xl shadow-md">
                      {userData?.email ?? "-"}
                    </div>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="block text-md font-medium text-slate-400 mb-2">
                    Country
                  </label>
                  {loading ? (
                    <div className="h-11 bg-slate-700 rounded-lg animate-pulse"></div>
                  ) : (
                    <div className="bg-slate-700 text-white rounded-lg px-4 py-3 text-sm md:text-xl flex items-center gap-3 shadow-md">
                      {countryCode ? (
                        <Image
                          src={`https://flagcdn.com/w20/${countryCode}.png`}
                          width={24}
                          height={16}
                          alt="flag"
                          className="rounded"
                        />
                      ) : (
                        <div className="w-6 h-4 bg-slate-600 rounded" />
                      )}
                      <span>{userData?.country ?? "-"}</span>
                    </div>
                  )}
                </div>

                {/* CF Username */}
                <div>
                  <label className="block text-md font-medium text-slate-400 mb-2">
                    Codeforces Username
                  </label>
                  {loading ? (
                    <div className="h-11 bg-slate-700 rounded-lg animate-pulse"></div>
                  ) : (
                    <div className="bg-slate-700 text-white rounded-lg px-4 py-3 text-sm md:text-xl shadow-md">
                      {userData?.cfusername ?? "-"}
                    </div>
                  )}
                </div>

                {/* Registered date */}
                <div>
                  <label className="block text-md font-medium text-slate-400 mb-2">
                    Joined Date
                  </label>
                  {loading ? (
                    <div className="h-11 bg-slate-700 rounded-lg animate-pulse"></div>
                  ) : (
                    <div className="bg-slate-700 text-white rounded-lg px-4 py-3 text-sm md:text-xl shadow-md">
                      {formatDate(userData?.registeredOn) || "-"}
                    </div>
                  )}
                </div>

                {/* Account Status */}
                <div>
                  <label className="block text-md font-medium text-slate-400 mb-2">
                    Status
                  </label>
                  {loading ? (
                    <div className="h-11 bg-slate-700 rounded-lg animate-pulse"></div>
                  ) : (
                    <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-lg px-4 py-3 text-sm md:text-xl font-semibold shadow-md flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Verified
                    </div>
                  )}
                </div>
              </div>

              
            </form>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}
