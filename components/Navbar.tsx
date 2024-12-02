import Link from "next/link";
import React from "react";
import LogoutButton from "./user/logoutButton";

export default function Navbar() {
  return (
    <header className="p-2 w-full border-b">
      <nav className="flex items-center justify-between">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
          <Link href="/">DwellNest</Link>
        </h1>
        <ul className="flex items-center gap-2">
          <li className="hover:underline transition duration-150">
            <Link href="/user/profile">Profile</Link>
          </li>
          <LogoutButton />
        </ul>
      </nav>
    </header>
  );
}
