import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/jobs", label: "Assignments" },
  { to: "/messages", label: "Messages" },
  { to: "/payments", label: "Payments" },
  { to: "/reviews", label: "Reviews" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">
          Skill Hire Flow
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={pathname === l.to ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
