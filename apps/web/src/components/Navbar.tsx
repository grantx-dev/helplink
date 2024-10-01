"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconBrandTabler,
  IconSettings,
  IconCode,
  IconBook,
  IconInfoHexagon,
  IconHelp,
  IconKey
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs"; // Import useUser

interface NavbarProps {
    children: React.ReactNode; // Define the type of children as React.ReactNode
  }

export default function Navbar({ children }: NavbarProps) {
    const links = [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Components",
        href: "/components",
        icon: (
          <IconCode className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "API keys",
        href: "/keys",
        icon: (
          <IconKey className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Settings",
        href: "/settings",
        icon: (
          <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ];

    const resourceLink = [
      {
        label: "Docs",
        href: "/docs",
        icon: (
          <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Support",
        href: "/support",
        icon: (
          <IconHelp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ];
  
    const [open, setOpen] = useState(false);
    const { user, isLoaded, isSignedIn } = useUser();
  
    return (
      <div
        className={cn(
          "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-screen h-screen max-w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden"
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-5">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="flex flex-col justify-between h-full">
                <div className="mt-8 flex flex-col gap-2 flex-grow">
                  {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                  ))}
                </div>
                <div className="flex items-center justify-start gap-5">
                  {isLoaded && isSignedIn ? (
                    <>
                  <div className="flex flex-col gap-3 flex-grow">
                  {resourceLink.map((resourceLink, idx) => (
                    <SidebarLink key={idx} link={resourceLink} />
                  ))}
                    <div className="flex flex-row gap-2.5 mr-3 flex-grow mt-2">
                    <UserButton showName={false} />
                      <span className="mt-1">
                        {user.firstName} {user.lastName}
                      </span>
                  </div>
                </div>

                    </>
                  ) : (
                    <span className="self-center">Loading...</span>
                  )}
                </div>
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
        <div className="flex-1">{children}</div>
      </div>
    );
  }

  export const Logo = () => {
    return (
      <Link
        href="/applications"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      > 
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-400 whitespace-pre"
      >
        HelpLink
      </motion.span>

      </Link>
    );
  };

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
            <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-400 whitespace-pre underline"
      >
        H
      </motion.span>
    </Link>
  );
};

