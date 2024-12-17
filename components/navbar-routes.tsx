"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
  const pathName = usePathname();
  const router = useRouter();
  const isTeacher = pathName?.startsWith("/teacher");
  const isPlayer = pathName?.startsWith("/chapter");
  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacher || isPlayer ? (
        <Button size="sm" variant="ghost">
          <LogOut className="h-4 w-4 mr-2" />
          Exit
        </Button>
      ) : (
        <Link href="teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
