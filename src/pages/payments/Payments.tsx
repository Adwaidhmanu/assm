import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Payments = () => {
  useEffect(() => { document.title = "Payments & Escrow – Skill Hire Flow"; }, []);
  return (
    <main className="container mx-auto px-6 py-10 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Payments & Escrow</h1>
      <p className="text-muted-foreground mb-6">Clients fund assignments in escrow before work starts. Upon approval, payment is released to the writer.</p>
      <div className="rounded-xl border p-6 bg-card space-y-4">
        <Button variant="hero" size="lg">Fund via Stripe (global)</Button>
        <Button variant="soft" size="lg">Fund via Razorpay (India)</Button>
        <p className="text-sm text-muted-foreground">Note: Connect Supabase + add Stripe/Razorpay secrets to enable real payments.</p>
      </div>
    </main>
  );
};

export default Payments;
