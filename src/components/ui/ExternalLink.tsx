import type { ComponentProps } from "react";

type ExternalLinkProps = Omit<ComponentProps<"a">, "target" | "rel">;

/** Link that opens in a new tab. Styled as an inline text link unless a className is given. */
export function ExternalLink({ className = "text-link underline", ...props }: ExternalLinkProps) {
  return <a target="_blank" rel="noopener noreferrer" className={className} {...props} />;
}
