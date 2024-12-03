"use client";

import { useUser } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import LogoutButton from "./logoutButton";
import Image from "next/image";
import { Button } from "../ui/button";
import { Calendar, Mail, User } from "lucide-react";

export default function UserCard() {
  const { user, isSignedIn } = useUser();

  return (
    <Card className="w-full max-w-xl mx-auto rounded-xl">
      <CardHeader>
        <div className="flex items-center gap-8">
          <Image
            className="rounded-full object-cover border-2 border-green-500"
            src={user?.imageUrl || "https://github.com/shadcn.png"}
            alt={user?.firstName || "Profile Pic"}
            width={120}
            height={120}
            priority
          />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5" />
              <CardTitle className="text-xl">
                {user?.fullName || "User Name"}
              </CardTitle>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <CardDescription className="text-base">
                {user?.emailAddresses?.[0]?.emailAddress || "No email available"}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5" />
            <Button 
              type="button" 
              className="rounded-lg" 
              variant="outline"
            >
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "No Date"}
            </Button>
          </div>
          {isSignedIn && <LogoutButton />}
        </div>
      </CardContent>
    </Card>
  );
}
