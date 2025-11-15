"use client";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

const userProfile = () => {
    const { user } = useAuth();
    return (
        <div className="max-w-full">
            <main className="p-6 mx-auto md:w-[70%] border-2 border-red-700">
                <section className="bg-black w-[50%] mx-auto rounded-2xl">
                    {/* profile images and cover with registered on */}
                    <section>
                        {/* cover */}
                        <Image
                            src="https://images.pexels.com/photos/683402/pexels-photo-683402.jpeg"
                            width={660}
                            height={10}
                            alt="banner"
                            className="h-28 rounded-2xl border-4 border-black"
                        />

                        {/* profile */}
                        <Image
                            src="https://images.unsplash.com/photo-1714356333088-45a9ba618365?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width={100}
                            height={100}
                            alt="profile"
                            className="rounded-full ml-12 -mt-12"
                        />

                        {/* verified tick mark */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="rgb(0,0,255)"
                            className="ml-30 -mt-8 icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                        </svg>
                    </section>

                    {/* name,email,registeredOn */}
                    <section className="mt-8 text-gray-100 ml-12">
                        {user && (
                            <div>
                                <h1 className="flex gap-8">
                                    {user.name}
                                    <span className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="6"
                                            height="6"
                                            viewBox="0 0 24 24"
                                            fill="lime"
                                            className="icon icon-tabler icons-tabler-filled icon-tabler-circle"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
                                        </svg>{" "}
                                        Verified
                                    </span>
                                </h1>
                            </div>
                        )}
                    </section>
                </section>
            </main>
        </div>
    );
};

export default userProfile;
