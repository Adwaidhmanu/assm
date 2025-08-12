import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Messages = () => {
  useEffect(() => { document.title = "Messages – Skill Hire Flow"; }, []);
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Messages</h1>
      <p className="text-muted-foreground mb-6">Realtime chat will be powered by Supabase Realtime (recommended) instead of Socket.io in this environment.</p>
      <div className="rounded-xl border p-4 bg-card">
        <div className="h-64 overflow-y-auto space-y-2 text-sm text-muted-foreground">
          <p>Chat UI placeholder…</p>
        </div>
        <div className="mt-4 flex gap-2">
          <Input placeholder="Type a message" />
          <Button variant="hero">Send</Button>
        </div>
      </div>
    </main>
  );
};

export default Messages;
