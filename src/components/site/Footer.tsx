import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import logo from "@/assets/obemi-logo.jpg.asset.json";
import { NAV, ORG } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <img
            src={logo.url}
            alt="Obemi Community Based Organisation logo"
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A community-led, non-profit organisation restoring ecosystems, empowering
            communities, and creating sustainable livelihoods across the Amboseli
            landscape.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-primary">
            <MapPin className="size-4 text-earth" />
            {ORG.location}
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-5 space-y-3">
            {NAV.slice(0, 4).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">More</h3>
          <ul className="mt-5 space-y-3">
            {NAV.slice(4).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-center text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {ORG.tagline} — © {new Date().getFullYear()} {ORG.name}
        </p>
      </div>
    </footer>
  );
}
