"use client";
import BurgerIcon from "./icons/burger-icon.svg";
import { useState } from "react";
import Link from "next/link";
import { routes } from "../data/routes";
import { twMerge } from "tailwind-merge";

const blogTitle = "Next JS Blog";

export function NavBar({ className }: { className?: string }) {
  return (
    <nav
      className={twMerge(
        "fixed w-full hidden lg:flex justify-between items-center px-8 py-4 bg-blue-100",
        className
      )}
    >
      <Link href="/">
        <h1 className="text-xl font-bold">{blogTitle}</h1>
      </Link>
      <div className="flex gap-8">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="hover:underline underline-offset-2"
          >
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function MobileNavBar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  function closeSidebar() {
    setOpen(false);
  }

  return (
    <div className={className}>
      <nav className="lg:hidden flex justify-between items-center px-8 py-4 bg-blue-100 fixed w-full">
        <Link href="/">
          <h1 className="text-xl font-bold">{blogTitle}</h1>
        </Link>
        <button onClick={() => setOpen(true)}>
          <BurgerIcon width={24} height={24} />
        </button>
      </nav>
      {/* Overlay */}
      <div
        className={`fixed top-0 bottom-0 right-0 left-0 bg-black ${
          open ? "bg-opacity-40 z-10" : "bg-opacity-0 -z-10"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-[200px] z-20 bg-white flex flex-col gap-4 p-4 text-lg transition ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            onClick={closeSidebar}
            className="hover:underline underline-offset-2"
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
