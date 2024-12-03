"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useClerk } from "@clerk/nextjs";

export default function LogoutButton() {
  const { signOut } = useClerk();
  return (
    <Button
      className="rounded"
      onClick={() => signOut()}
      variant={"destructive"}
      type="button"
    >
      <LogOut />
      <span>Logout</span>
    </Button>
  );
}
