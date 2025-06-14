import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Job <span className="text-primary">Find</span>
        </h1>
      </Link>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* <ModeToggle /> */}
        <Button className="px-4 py-2">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
