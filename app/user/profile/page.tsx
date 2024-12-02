/* eslint-disable @typescript-eslint/ban-ts-comment */
import UserCard from "@/components/user/userCard";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* @ts-ignore */}
      <UserCard />
    </div>
  );
}
