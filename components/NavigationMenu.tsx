"use client";

import { Menu, Home } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

/**
 * Navigation Menu Component
 *
 * Dropdown menu with navigation options for the Midland Center page.
 * Provides quick access to return to the home page.
 */
export function NavigationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center justify-center w-6 h-6 transition-opacity hover:opacity-70"
          aria-label="Navigation menu"
        >
          <Menu className="w-6 h-6 text-gray-900" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link href="https://www.fullerequip.com" className="flex items-center gap-2 cursor-pointer">
            <Home className="w-4 h-4" />
            <span>Go to Fuller Equip</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
