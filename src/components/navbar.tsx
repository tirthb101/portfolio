"use client";

import { useState } from "react";
import { Link } from "@heroui/link";
import { Menu, X } from "lucide-react";
import { Button } from "@heroui/button";

import { ThemeSwitch } from "@/components/theme-switch";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 shadow-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link className="text-xl font-bold" href="/">
            Tirth.dev
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:text-primary transition-colors" href="/">
            Home
          </Link>
          <Link className="hover:text-primary transition-colors" href="#about">
            About
          </Link>
          <Link className="hover:text-primary transition-colors" href="/blog">
            Blogs
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href="/projects"
          >
            Projects
          </Link>
          {/* Desktop Theme Switch */}
          <ThemeSwitch aria-label="Toggle theme" className="flex" />
        </nav>

        {/* Hamburger menu */}
        <div className="md:hidden">
          <Button size="sm" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-md border-t">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link className="hover:text-primary transition-colors" href="/">
              Home
            </Link>
            <Link className="hover:text-primary transition-colors" href="/">
              About
            </Link>
            <Link className="hover:text-primary transition-colors" href="/blog">
              Blogs
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="/projects"
            >
              Projects
            </Link>

            {/* Proper Toggle Theme Button */}
            <ThemeSwitch
              aria-label="Toggle theme"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            />
          </nav>
        </div>
      )}
    </header>
  );
}
