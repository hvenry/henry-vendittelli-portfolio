"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    // icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  // useScroll hook to get scrollYProgress
  const { scrollYProgress } = useScroll();
  // use state to keep track of visibility
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      console.log(direction);
      // if user is scrolling up, show
      if (scrollYProgress.get() < 0) {
        // setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          // setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.15,
        }}
        className={cn(
          "w-full md:w-1/2 fixed flex justify-center items-center h-14 top-5 rounded-xl bg-black bg-opacity-50 backdrop-filter backdrop-blur-md space-x-10 px-10",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-100 hover:text-blue-300",
            )}
          >
            {/* <span className="block sm:hidden">{navItem.icon}</span> */}
            <span className="font-bold">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
