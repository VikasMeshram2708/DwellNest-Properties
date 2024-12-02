"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <Button className="rounded" onClick={() => signOut()} variant={"destructive"} type="button">
      <LogOut />
      <span>Logout</span>
    </Button>
  );
}
