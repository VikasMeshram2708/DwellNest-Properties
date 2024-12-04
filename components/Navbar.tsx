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
import { Button } from "./ui/button";

export default function Navbar() {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <header className="p-2 w-full border-b bg-transparent">
        <nav className="container mx-auto flex items-center justify-between">
          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl">
            DwellNest
          </h1>
          <p className="text-sm text-gray-500">Loading...</p>
        </nav>
      </header>
    );
  }

  return (
    <header className="p-4 w-full border-b bg-transparent shadow-sm">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl">
            <Link href="/">DwellNest</Link>
          </h1>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center gap-4">
          {/* User Dropdown Menu */}
          {isSignedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="User menu"
                >
                  <Avatar>
                    <AvatarImage
                      src={user?.imageUrl || "https://github.com/shadcn.png"}
                      alt={
                        user?.firstName
                          ? `${user.firstName}'s avatar`
                          : "Profile Pic"
                      }
                    />
                    <AvatarFallback>
                      {user?.firstName ? user.firstName.charAt(0) : "CN"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48" align="end" sideOffset={5}>
                <DropdownMenuLabel className="font-semibold">
                  {user?.firstName ? `Hello, ${user.firstName}` : "My Account"}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/user/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/user/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <LogoutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className="text-sm md:text-base font-medium hover:text-blue-500 transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-sm md:text-base font-medium bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Register
                </Link>
              </li>
            </>
          )}
          {/* Theme Toggle */}
          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
}
