import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const sticker =
  "inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-black px-5 py-3 text-[15px] font-medium leading-none shadow-[4px_4px_0_0_#000] transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1585AC]";

const fills = {
  white: "bg-white text-black",
  yellow: "bg-[#F6F648] text-black",
  blue: "bg-[#1585AC] text-white",
} as const;

type Variant = keyof typeof fills;

type Common = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonProps = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };

type LinkProps = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & { href: string };

export function StickerButton({ variant = "white", className, children, ...props }: ButtonProps | LinkProps) {
  const classes = cn(sticker, fills[variant], className);

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
