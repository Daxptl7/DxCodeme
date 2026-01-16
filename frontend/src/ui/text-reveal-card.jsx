"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { SparklesCore } from "./sparkles";

export const TextRevealCard = ({
    text,
    revealText,
    children,
    className,
}) => {
    const [width, setWidth] = useState(0);
    const cardRef = useRef(null);
    const timeoutRef = useRef(null);

    function mouseMoveHandler(event) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        const { left, width: cardWidth } = cardRef.current.getBoundingClientRect();
        const relativeX = event.clientX - left;
        setWidth(relativeX);
    }

    function mouseLeaveHandler() {
        timeoutRef.current = setTimeout(() => {
            setWidth(0);
        }, 2000);
    }

    return (
        (<div
            onMouseMove={mouseMoveHandler}
            onMouseLeave={mouseLeaveHandler}
            ref={cardRef}
            className={cn(
                "bg-[#1d1c20] border border-white/[0.08] w-full rounded-lg p-8 relative overflow-hidden",
                className
            )}>
            {children}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#ffffff"
                />
            </div>
            <div className="h-40 relative flex items-center overflow-hidden">
                <motion.div
                    style={{
                        width: "100%",
                    }}
                    animate={{
                        clipPath: `inset(0 ${100 - (width / (cardRef.current?.offsetWidth || 1)) * 100}% 0 0)`, // Use explicit clip-path inset
                    }}
                    transition={{
                        duration: 0,
                        ease: "linear",
                    }}
                    className="absolute inset-0 z-20 flex items-center">
                    <p
                        className="text-[3rem] md:text-[5rem] lg:text-[6rem] py-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        {revealText}
                    </p>
                </motion.div>

                <motion.div
                    animate={{
                        clipPath: `inset(0 0 0 ${(width / (cardRef.current?.offsetWidth || 1)) * 100}%)`,
                    }}
                    transition={{
                        duration: 0,
                        ease: "linear",
                    }}
                    className=" z-10 flex items-center"
                >
                    <p
                        className="text-[3rem] md:text-[5rem] lg:text-[6rem] py-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-100">
                        {text}
                    </p>
                </motion.div>
            </div>
        </div>)
    );
};

export const TextRevealCardTitle = ({
    children,
    className
}) => {
    return (
        (<h2 className={cn("text-white text-lg mb-2", className)}>
            {children}
        </h2>)
    );
};

export const TextRevealCardDescription = ({
    children,
    className
}) => {
    return (
        (<p className={cn("text-[#a9a9a9] text-sm", className)}>
            {children}
        </p>)
    );
};
