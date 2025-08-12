import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mock = [
  { id: 1, name: "A. Client", rating: 5, text: "Great work, delivered early!" },
  { id: 2, name: "B. Writer", rating: 4, text: "Clear instructions and prompt payment." },
];

const Reviews = () => {
  useEffect(() => { document.title = "Ratings & Reviews – Skill Hire Flow"; }, []);
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Ratings & Reviews</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {mock.map((r) => (
          <Card key={r.id}>
            <CardHeader>
              <CardTitle className="text-lg">{r.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="mb-1">Rating: {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</p>
              <p>{r.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Reviews;
