import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import crown from "@/app/assets/mikan.png";

interface Props {
    size?: "sm" | "md" | "lg";
}

export default function Loading({ size = "lg" }: Props) {
    const sizeClassVariants = {
        sm: "w-6 h-6",
        md: "w-12 h-12",
        lg: "w-12 h-12",
    };
    const sizeClass = sizeClassVariants[size];

    return (
        <div className="flex h-full w-full items-center justify-center gap-1">
            <motion.div
                className={`${sizeClass} rounded-full`}
                animate={{
                    rotate: 360,
                    transition: {
                        duration: 1,
                        ease: "linear",
                        repeat: Infinity,
                    },
                }}
            >
                <Image src={crown} alt="Mikan" className={sizeClass} />
            </motion.div>
        </div>
    );
}
