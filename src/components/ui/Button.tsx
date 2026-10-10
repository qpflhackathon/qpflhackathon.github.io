import type { ReactNode } from "react";

import { ExternalLink } from "./ExternalLink";

const variants = {
  primary:
    "border-canard bg-leman font-medium text-white hover:bg-canard focus-visible:bg-canard",
  secondary:
    "border-taupe bg-white text-taupe hover:bg-taupe hover:text-white focus-visible:bg-taupe focus-visible:text-white",
};

type ButtonProps = {
  variant?: keyof typeof variants;
  /** Without an href the button renders as a non-interactive label. */
  href?: string;
  className?: string;
  children: ReactNode;
};

export function Button({ variant = "primary", href, className = "", children }: ButtonProps) {
  const classes = `inline-block cursor-pointer rounded-[10px] border-[1.5px] px-[1.4rem] py-[0.65rem] font-ui text-[0.95rem] transition duration-250 ${variants[variant]} ${className}`;

  if (!href) return <span className={classes}>{children}</span>;
  if (href.startsWith("http")) {
    return (
      <ExternalLink href={href} className={classes}>
        {children}
      </ExternalLink>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
