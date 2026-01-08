"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps
    extends Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart" | "style"
    > {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-black text-white hover:bg-neutral-800",
            secondary: "bg-white text-black hover:bg-neutral-100",
            outline: "bg-transparent border border-black text-black hover:bg-black hover:text-white",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-8 py-4 text-base",
            lg: "px-10 py-5 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center font-medium transition-colors duration-300 uppercase letter-tracking-widest",
                    variants[variant],
                    sizes[size],
                    className
                )}
                style={{ letterSpacing: "0.15em" }}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
