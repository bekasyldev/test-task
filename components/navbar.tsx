import Link from "next/link";
import { Menu } from "lucide-react";

const links = [
  {
    href: "/works",
    label: "Works",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const Navbar = () => {
  return (
    <nav className="h-20 w-full flex items-center justify-end px-4 md:px-16">
      <Menu className="lg:hidden block" />
      <ul className="hidden lg:block space-x-4 font-semibold">
        {links.map((link) => (
          <Link href={link.href} key={link.label}>
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
