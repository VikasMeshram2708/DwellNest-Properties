"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useSession } from "next-auth/react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutButton from "./logoutButton";
import Image from "next/image";

export default function UserCard() {
  const { data: session } = useSession();

  return (
    <Card className="w-full max-w-xl mx-auto rounded shadow">
      <CardHeader>
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full bg-cover object-contain border-2 border-green-500"
            src={session?.user?.image || "https://github.com/shadcn.png"}
            alt={session?.user?.name || "Profile Pic"}
            width={200}
            height={200}
            priority={true}
          />
          <div className="flex flex-col gap-1">
            <CardTitle className="capitalize">{session?.user?.name}</CardTitle>
            {/* <CardDescription>{session?.user?.email}</CardDescription> */}
            <CardDescription>{JSON.stringify(session?.user)}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardFooter>
        <LogoutButton />
      </CardFooter>
    </Card>
  );
}
