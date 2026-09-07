import type { NavLinkItemProps } from "../../types/types";

export const headerLinks: NavLinkItemProps[] = [
  { to: "/", label: "Forside" },
  { to: "/themes", label: "Temaer" },
  { to: "/faq", label: "FAQ" },
  { to: "/build", label: "byg-dit-eget" },
  { to: "/education", label: "Undervisning" },
  { to: "/contact", label: "Kontakt" },
  { to: "/login", label: "Login" },
];

export const footerLinks: NavLinkItemProps[] = [
  { to: "/", label: "Forside" },
  { to: "/faq", label: "FAQ" },
  { to: "/education", label: "Undervisning" },
];
