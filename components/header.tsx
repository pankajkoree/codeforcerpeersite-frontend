import Link from "next/link";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <nav>
      {/* logo */}
      <h1>CodeforceMates</h1>

      {/* home nav */}
      <Link href="/">Home</Link>

      {/* rated nav */}
      <Link href="/">Rated</Link>

      {/* contests nav */}
      <Link href="/">Contests</Link>

      {/* university mates */}
      <Link href="/universitymates">University mate</Link>

      {/* search user */}
      <Input type="text" placeholder="search user" />

      {/* profile nav */}
      <Link href="/">Profile</Link>
    </nav>
  );
};

export default Header;
