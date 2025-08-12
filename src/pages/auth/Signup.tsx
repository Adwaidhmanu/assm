import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const role = params.get("role") ?? "client";
  useEffect(() => { document.title = "Create your account – Skill Hire Flow"; }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Account created (UI only)", description: "Connect Supabase to enable real auth." });
    navigate("/profile/setup?role=" + role);
  };

  return (
    <main className="container mx-auto px-6 py-12 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Create your account</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required placeholder="Your password" />
        </div>
        <Button variant="hero" size="lg" type="submit">Sign up</Button>
        <p className="text-sm text-muted-foreground">Already have an account? <Link to="/login" className="text-primary">Log in</Link></p>
      </form>
    </main>
  );
};

export default Signup;
