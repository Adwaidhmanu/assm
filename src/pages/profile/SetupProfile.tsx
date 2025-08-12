import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const SetupProfile = () => {
  const [params] = useSearchParams();
  const role = params.get("role") ?? "client";
  const navigate = useNavigate();
  useEffect(() => { document.title = `Set up your profile – ${role}`; }, [role]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Profile saved (UI only)", description: "Connect Supabase to store profiles." });
    navigate(role === "writer" ? "/jobs" : "/jobs/new");
  };

  return (
    <main className="container mx-auto px-6 py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Set up your profile</h1>
      <p className="text-muted-foreground mb-8">Role: <span className="text-foreground font-medium">{role}</span></p>
      <form onSubmit={handleSubmit} className="space-y-5">
        {role === "writer" ? (
          <>
            <div>
              <Label htmlFor="skills">Skills & subjects</Label>
              <Input id="skills" placeholder="e.g., Economics, Python, Research" />
            </div>
            <div>
              <Label htmlFor="rate">Rate (per page/hour)</Label>
              <Input id="rate" placeholder="$15/hour" />
            </div>
            <div>
              <Label htmlFor="bio">Short bio</Label>
              <Textarea id="bio" placeholder="Tell clients about your experience" />
            </div>
          </>
        ) : (
          <>
            <div>
              <Label htmlFor="subjects">Preferred subjects</Label>
              <Input id="subjects" placeholder="e.g., Marketing, Literature" />
            </div>
            <div>
              <Label htmlFor="payment">Payment method (placeholder)</Label>
              <Input id="payment" placeholder="Stripe/Razorpay (connect later)" />
            </div>
          </>
        )}
        <Button variant="hero" size="lg" type="submit">Save and continue</Button>
      </form>
    </main>
  );
};

export default SetupProfile;
