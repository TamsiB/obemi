import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/obemi-logo.jpg.asset.json";
import { NAV } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-border bg-background/90 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-background/60 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Obemi Community Based Organisation logo"
            className="h-9 w-auto md:h-11"
          />
          <span className="sr-only">Obemi Community Based Organisation</span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-active={pathname === item.to}
              className={cn(
                "nav-link text-[0.8rem] font-semibold tracking-wide uppercase transition-colors",
                pathname === item.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/partner-with-us"
            className="hidden rounded-sm bg-forest px-5 py-2.5 text-[0.75rem] font-bold tracking-[0.14em] text-primary-foreground uppercase shadow-soft transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
          >
            Partner With Us
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-primary xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-reveal border-t border-border bg-background px-5 pb-6 xl:hidden">
          <ul className="divide-y divide-border">
            <li>
              <Link
                to="/"
                className="block py-3.5 text-sm font-semibold tracking-wide text-foreground uppercase"
              >
                Home
              </Link>
            </li>
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "block py-3.5 text-sm font-semibold tracking-wide uppercase",
                    pathname === item.to ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
