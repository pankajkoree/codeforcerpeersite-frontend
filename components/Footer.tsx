import Link from "next/link";
import { Input } from "./ui/input";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-t-2">
      <nav className="flex justify-between items-center px-8 py-4">
        {/* left nav */}
        <div className="flex gap-16 items-center text-xl">
          {/* logo */}
          <div className="flex gap-1">
            <Image src="./logo.svg" width={32} height={32} alt="logo" />
            <h1 className="text-3xl font-semibold text-black">CodeforceMates</h1>
          </div>


          <div className="flex gap-4">
            {/* home nav */}
            <Link href="/">Home</Link>

            {/* rated nav */}
            <Link href="/">Rated</Link>

            {/* contests nav */}
            <Link href="/">Contests</Link>

            {/* university mates */}
            <Link href="/universitymates">University mates</Link>
          </div>
        </div>
        {/* left nav */}

        {/* right nav */}
        <div className="flex gap-4 items-center text-xl">
          {/* search user */}
          <Input type="text" placeholder="🔍 search user" />

          {/* profile nav */}
          <Link href="/">Profile</Link>
        </div>
        {/* end right nav */}

      </nav>
    </div>

  );
};

export default Footer;
