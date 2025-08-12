import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Skill Hire Flow – Hire Writers & Get Assignments Done";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Hire expert writers or earn by writing
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Post assignments, receive bids, chat in real-time, and pay securely with escrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={() => navigate("/role")}>Get started</Button>
              <Button variant="soft" size="xl" onClick={() => navigate("/jobs")}>Browse assignments</Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] animate-float">
              <div className="h-56 md:h-72 rounded-lg bg-gradient-to-br from-primary/20 to-primary-glow/20" aria-hidden />
              <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-muted-foreground">
                <div className="p-3 rounded-lg bg-accent text-accent-foreground">Escrow</div>
                <div className="p-3 rounded-lg bg-accent text-accent-foreground">Realtime chat</div>
                <div className="p-3 rounded-lg bg-accent text-accent-foreground">Bidding</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
