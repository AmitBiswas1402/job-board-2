import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { auth, signOut } from "@/app/utils/auth";

export async function Navbar() {
  const session = await auth();
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
        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <Button>Logout</Button>
          </form>
        ) : (
          <Link
            href="/login"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
