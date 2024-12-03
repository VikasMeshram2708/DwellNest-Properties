"use client";

import Link from "next/link";
import React from "react";
import LogoutButton from "./user/logoutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const { user, isSignedIn } = useUser();
  return (
    <header className="p-2 w-full border-b">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
          <Link href="/">DwellNest</Link>
        </h1>
        <ul className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src={user?.imageUrl || "https://github.com/shadcn.png"}
                  alt={user?.firstName || "Profile Pic"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/user/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/user/dashboard">Dashboard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {isSignedIn && <LogoutButton />}
          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
}
