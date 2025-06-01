"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CareerBanner() {
  return (
    <Link href={"/careertest"}>
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" mt-24 sm:w-3/4 sm:mx-auto md:w-1/2 mx-auto  p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-[length:200%_200%] animate-border-gradient"
    >
      <div className="bg-white rounded-full flex items-center justify-center px-6 py-2 dark:bg-background">
        <h1 className="text-sm sm:text-sm md:text-xl font-bold text-neutral-900 dark:text-neutral-200 flex items-center gap-2 text-center">
          Get Your <span className="text-purple-400">AI Generated</span> Career Path
          <ArrowRight className="w-5 h-5 text-blue-400" />
        </h1>
      </div>
    </motion.div>
    </Link>
  );
}


export default CareerBanner