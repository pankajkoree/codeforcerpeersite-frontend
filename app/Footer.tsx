export default function Footer() {
    return (
        <div className="fixed bottom-0 z-50 w-full border-t-2 border-gray-400 bg-linear-to-r from-blue-100 via-green-50  to-blue-100">
            <nav className="flex justify-between items-center px-8 py-4">
                {/* left nav */}
                <div className="flex gap-16 items-center text-sm">
                    {/* logo */}
                    <h1>Building in public <a href="https://github.com/pankajkoree">@pankajkoree</a>  </h1>
                </div>
                {/* left nav */}

                {/* right nav */}
                <div className="flex gap-4 items-center text-sm">
                    {/* Social Icons */}
                    <a
                        href="https://github.com/pankajkoree"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-blue-400 dark:hover:text-purple-400 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1 2.9.8.1-.7.4-1 .7-1.2-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.2 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .4.2.8.8.6 4.6-1.5 7.9-5.9 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
                        </svg>
                    </a>

                    <a
                        href="https://discord.gg/p7BbYy5KtT"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Discord"
                        className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M20.317 4.369a19.79 19.79 0 00-4.885-1.515.07.07 0 00-.074.035c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.508 0 12.58 12.58 0 00-.617-1.25.067.067 0 00-.074-.035 19.736 19.736 0 00-4.885 1.515.063.063 0 00-.03.025C1.278 9.04.665 13.58.958 18.075a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.074.074 0 00.079-.027c.462-.63.874-1.295 1.226-1.994a.073.073 0 00-.041-.1 12.25 12.25 0 01-1.752-.84.073.073 0 01-.007-.121c.118-.09.236-.18.349-.273a.07.07 0 01.073-.01c3.675 1.683 7.643 1.683 11.276 0a.07.07 0 01.074.009c.113.094.23.184.349.274a.073.073 0 01-.006.12 11.69 11.69 0 01-1.753.839.073.073 0 00-.04.102c.36.698.773 1.362 1.227 1.992a.075.075 0 00.078.028 19.88 19.88 0 005.993-3.03.077.077 0 00.031-.055c.5-7.03-1.19-11.532-4.097-13.682a.061.061 0 00-.03-.025zm-12.12 9.013c-1.182 0-2.157-1.09-2.157-2.43 0-1.34.955-2.43 2.157-2.43 1.21 0 2.175 1.1 2.157 2.43 0 1.34-.955 2.43-2.157 2.43zm7.606 0c-1.182 0-2.157-1.09-2.157-2.43 0-1.34.955-2.43 2.157-2.43 1.21 0 2.175 1.1 2.157 2.43 0 1.34-.946 2.43-2.157 2.43z" />
                        </svg>
                    </a>
                    <a

                        href="https://open.spotify.com/user/31tkr53yupl5ppssnzh7lbi4kd5q"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Spotify"
                        className="hover:text-green-500 dark:hover:text-green-400 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.39 17.51a.75.75 0 01-1.03.26c-2.82-1.73-6.37-2.13-10.56-1.17a.75.75 0 11-.33-1.47c4.54-1.02 8.46-.56 11.56 1.32a.75.75 0 01.36 1.06zm1.46-3.13a.94.94 0 01-1.29.31c-3.23-1.97-8.16-2.54-11.98-1.38a.94.94 0 01-.53-1.81c4.26-1.25 9.67-.63 13.34 1.62a.94.94 0 01.46 1.26zm.13-3.25c-3.77-2.23-10.03-2.43-13.65-1.31a1.12 1.12 0 01-.66-2.15c4.12-1.27 11-1.03 15.28 1.5a1.12 1.12 0 01-1.14 1.96h.17z" />
                        </svg>
                    </a>
                </div>

                {/* end right nav */}

            </nav>
        </div>
    )
}