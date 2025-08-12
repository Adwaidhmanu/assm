import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => { document.title = "Log in – Skill Hire Flow"; }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Logged in (UI only)", description: "Connect Supabase to enable real auth." });
    navigate("/jobs");
  };

  return (
    <main className="container mx-auto px-6 py-12 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Welcome back</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required placeholder="Your password" />
        </div>
        <Button variant="hero" size="lg" type="submit">Log in</Button>
        <p className="text-sm text-muted-foreground">No account? <Link to="/signup" className="text-primary">Sign up</Link></p>
      </form>
    </main>
  );
};

export default Login;
