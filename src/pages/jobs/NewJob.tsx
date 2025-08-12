import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const NewJob = () => {
  const navigate = useNavigate();
  useEffect(() => { document.title = "Post a new assignment – Skill Hire Flow"; }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Job published (UI only)", description: "Connect Supabase to store jobs." });
    navigate("/jobs");
  };

  return (
    <main className="container mx-auto px-6 py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Create Job</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="title">Assignment title</Label>
          <Input id="title" placeholder="e.g., Case Study on Consumer Behavior" required />
        </div>
        <div>
          <Label htmlFor="subject">Subject / Topic</Label>
          <Input id="subject" placeholder="e.g., Marketing" required />
        </div>
        <div>
          <Label htmlFor="limit">Word count or page limit</Label>
          <Input id="limit" placeholder="e.g., 2000 words" />
        </div>
        <div>
          <Label htmlFor="deadline">Deadline</Label>
          <Input id="deadline" type="date" />
        </div>
        <div>
          <Label htmlFor="budget">Budget</Label>
          <Input id="budget" placeholder="$150" />
        </div>
        <div>
          <Label htmlFor="desc">Description</Label>
          <Textarea id="desc" placeholder="Add details, requirements, and references" />
        </div>
        <Button variant="hero" size="lg" type="submit">Publish Job</Button>
      </form>
    </main>
  );
};

export default NewJob;
