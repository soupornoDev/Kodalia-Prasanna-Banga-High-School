"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button";

export default function NavBar() {
  const router = useRouter();

  return (
    <header>
      <nav className="p-4 bg-slate-100 flex justify-between items-center">
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/" className="font-medium">Home</Link>
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 bg-black text-white rounded">
                About ▼
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/history">History</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/achievements">Achievements</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teachers">Our Teachers</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        <Button type="button" 
          className="bg-amber-500 text-black px-4 py-2 rounded font-medium hover:bg-amber-600 transition " children="Sign up" onClick={() => router.push("/register")}>
          
        </Button>
      </nav>
    </header>
  );
}