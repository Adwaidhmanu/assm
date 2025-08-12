import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const mockJobs = [
  { id: 1, title: "Literature Review on Climate Policy", subject: "Environmental Science", budget: "$120", deadline: "3 days" },
  { id: 2, title: "Python Script for Data Cleaning", subject: "Computer Science", budget: "$80", deadline: "1 week" },
  { id: 3, title: "Marketing Plan for Startup", subject: "Marketing", budget: "$200", deadline: "5 days" },
];

const JobsList = () => {
  const navigate = useNavigate();
  useEffect(() => { document.title = "Browse assignments – Skill Hire Flow"; }, []);

  return (
    <main className="container mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Assignments</h1>
        <Button variant="hero" onClick={() => navigate("/jobs/new")}>Post a job</Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-[var(--shadow-elegant)] transition-shadow">
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Subject: {job.subject}</p>
              <p>Budget: {job.budget}</p>
              <p>Deadline: {job.deadline}</p>
              <div className="pt-2 flex gap-2">
                <Button size="sm" variant="soft">Message client</Button>
                <Button size="sm" variant="hero">Bid</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default JobsList;
