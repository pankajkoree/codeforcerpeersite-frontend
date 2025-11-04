import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b-2 border-gray-400">
      <nav className="flex justify-between items-center px-8 py-4 bg-linear-to-r from-blue-100 via-green-50  to-blue-100">
        {/* left nav */}
        <div className="flex gap-16 items-center text-xl">
          {/* logo */}
          <Link href="/">
            <div className="flex gap-1">
              <Image src="./logo.svg" width={32}
                height={32} alt="logo" />
              <h1 className="text-3xl font-semibold text-black">CodeforceMates</h1>
            </div>
          </Link>



          <div className="flex gap-4">
            {/* home nav */}
            <Link href="/" className="hover:border-b-2 hover:border-blue-400">Home</Link>

            {/* contests nav */}
            <Link href="/contests" className="hover:border-b-2 hover:border-blue-400">Contests</Link>

            {/* university mates */}
            <Link href="/universitymates" className="hover:border-b-2 hover:border-blue-400">University mates</Link>
          </div>
        </div>
        {/* left nav */}

        {/* right nav */}
        <div className="flex gap-4 items-center">
          {/* search user */}
          <div className="flex items-center gap-1 border-2 border-gray-400 rounded-sm px-2">
            <Input type="text" placeholder="search user" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>


          {/* profile nav */}
          <div className="flex items-center gap-2 hover:cursor-pointer rounded-sm hover:bg-blue-400 hover:text-white px-2 py-2 group">
            {/* user icon */}
            <svg fill="none" stroke="currentColor" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="stroke-gray-800 group-hover:stroke-white">
              <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zM5.16 13.67A2.84 2.84 0 0 1 8 11.51a2.82 2.82 0 0 1 2.84 2.16 7.24 7.24 0 0 1-5.68 0zm6.84-.61a4.09 4.09 0 0 0-4-2.77 4.09 4.09 0 0 0-3.95 2.78A6.14 6.14 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.11 6.11 0 0 1 12 13.06z" />
              <path d="M8.05 4.3A2.33 2.33 0 0 0 5.8 6.7a2.33 2.33 0 0 0 2.25 2.4 2.33 2.33 0 0 0 2.25-2.4 2.33 2.33 0 0 0-2.25-2.4zm0 3.55a1.08 1.08 0 0 1-1-1.15 1.08 1.08 0 0 1 1-1.15 1.08 1.08 0 0 1 1 1.15 1.08 1.08 0 0 1-1 1.15z" />
            </svg>
            {/* link for login */}
            <Link href="/">Login</Link>

            {/* icon for arrow */}
            <svg fill="none" height="15px" width="15px" fontWeight="800" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              viewBox="0 0 511.787 511.787"
              className="stroke-gray-800 group-hover:stroke-white stroke-100 duration-300 ease-in-out group-hover:rotate-180">
              <g>
                <g>
                  <path d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213
			c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333
			C512.827,136.693,512.827,129.867,508.667,125.707z"/>
                </g>
              </g>
            </svg>
          </div>
        </div>
        {/* end right nav */}

      </nav>
    </div>

  );
};

export default Header;
