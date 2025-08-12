import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RoleSelect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Choose your role – Skill Hire Flow";
  }, []);

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Choose your role</h1>
      <p className="text-muted-foreground mb-8">This helps us tailor your experience.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border p-6 bg-card">
          <h2 className="text-xl font-semibold mb-2">I want to hire a writer</h2>
          <p className="text-muted-foreground mb-4">Post assignments and manage bids.</p>
          <Button variant="hero" onClick={() => navigate("/signup?role=client")}>Continue as Client</Button>
        </div>
        <div className="rounded-xl border p-6 bg-card">
          <h2 className="text-xl font-semibold mb-2">I want to write assignments</h2>
          <p className="text-muted-foreground mb-4">Browse jobs and earn money.</p>
          <Button variant="hero" onClick={() => navigate("/signup?role=writer")}>Continue as Writer</Button>
        </div>
      </div>
    </main>
  );
};

export default RoleSelect;
