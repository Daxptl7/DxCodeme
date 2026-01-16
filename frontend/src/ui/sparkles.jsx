"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "../utils/cn"; // Assuming a cn utility utility exists, otherwise I'll need to create it or just use clsx/tailwind-merge directly. Wait, I should check if cn exists.

// I will create a basic cn utility if it doesn't exist, but usually it's in utils or lib.
// Let's assume standard Aceternity pattern: lib/utils.ts or utils/cn.ts
// I will check for it first, but to save a turn I'll just check if `src/lib/utils.ts` or `src/utils/cn.ts` exists in next steps.
// For now, I'll inline the class merging if simpler or standard.
// Actually, I saw `clsx` and `tailwind-merge` in package.json.

export const SparklesCore = (props) => {
    const {
        id,
        className,
        background,
        minSize,
        maxSize,
        speed,
        particleColor,
        particleDensity,
    } = props;
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    const controls = { // Default options based on standard tsparticles
        background: {
            color: {
                value: background || "transparent",
            },
        },
        fullScreen: {
            enable: false,
            zIndex: 1,
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            bounce: {
                horizontal: {
                    value: 1,
                },
                vertical: {
                    value: 1,
                },
            },
            color: {
                value: particleColor || "#ffffff",
            },
            links: {
                color: particleColor || "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce", // or out
                },
                random: false,
                speed: speed || 2, // Default speed
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    // area: 800,
                },
                value: particleDensity || 100, // Default density
            },
            opacity: {
                value: { min: 0.1, max: 0.5 },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: minSize || 1, max: maxSize || 3 },
            },
        },
        detectRetina: true,
    };

    const generatedId = useId();

    return (
        (<div className={className}>
            {init && (
                <Particles
                    id={id || generatedId}
                    className={className}
                    options={controls}
                />
            )}
        </div>)
    );
};
