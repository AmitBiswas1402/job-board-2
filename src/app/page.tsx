"use client";

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();
  const [role, setRole] = useState<string | undefined>();

  useEffect(() => {
    if (user) {
      const userRole = user.publicMetadata?.role as string | undefined;
      setRole(userRole);
      console.log("Detected role:", userRole);
    }
  }, [user]);

  return (
    <div className="min-h-screen p-8">
      {/* NAVBAR */}
      <header className="flex justify-between items-center border-b pb-4 mb-8">
        <h1 className="text-2xl font-bold">My App</h1>
        <div className="flex items-center gap-4">
          <SignedOut>
            {/* Login button triggers popup */}
            <SignInButton mode="modal" />
          </SignedOut>

          <SignedIn>
            {/* Show Employer button only if admin */}
            {role === "admin" && (
              <Link
                href="/dashboard/admin"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Employer Dashboard
              </Link>
            )}

            {/* Clerk user dropdown */}
            <UserButton />
          </SignedIn>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        <h2 className="text-xl font-semibold">Welcome to the homepage!</h2>
        <p>This is where your content goes.</p>
      </main>
    </div>
  );
}
