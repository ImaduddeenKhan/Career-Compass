"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Briefcase, ArrowUpRight, Lightbulb, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Job {
  _id: string;
  title: string;
  salary: string;
  location: string;
  roadmap: string;
  qualification: string;
}

interface Skills {
  _id: string;
  title: string;
  duration: string;
  description: string;
  levels: string[];
  link: string;
}

export default function WorkRecommendationsPage() {
  const searchParams = useSearchParams();
  const level = searchParams.get("level") || "10th";
  const [activeTab, setActiveTab] = useState("jobs");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [skills, setSkills] = useState<Skills[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [loadingSkills, setLoadingSkills] = useState(true);

  // Fetch jobs from the database
  useEffect(() => {
    const fetchJobs = async () => {
      setLoadingJobs(true);
      try {
        const res = await fetch(`/api/jobs?level=${level}`);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      } finally {
        setLoadingJobs(false);
      }
    };

    fetchJobs();
  }, [level]);

  // Fetch skills from the database
  useEffect(() => {
    const fetchSkills = async () => {
      setLoadingSkills(true);
      try {
        const res = await fetch("/api/skills");
        const data = await res.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills", error);
      } finally {
        setLoadingSkills(false);
      }
    };

    fetchSkills();
  }, [level]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 p-4 md:p-8 mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <Link
                href="/career-path/work"
                className="text-primary hover:underline inline-flex items-center"
              >
                <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                Back to Education Levels
              </Link>

              <div className="space-y-2 mt-4">
                <h1 className="text-3xl font-bold">Career Recommendations</h1>
                <p className="text-muted-foreground">
                  Based on your{" "}
                  {level === "10th"
                    ? "10th Pass"
                    : level === "12th"
                    ? "12th Pass"
                    : "Unskilled Worker"}{" "}
                  qualification
                </p>
              </div>
            </div>

            <Tabs defaultValue="jobs" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="jobs">Suitable Job Role</TabsTrigger>
                <TabsTrigger value="skills">Upgrade Skills</TabsTrigger>
              </TabsList>

              {/* Jobs Tab */}
              <TabsContent value="jobs" className="space-y-6">
                {loadingJobs ? (
                  <div className="flex justify-center items-center">
                    <Loader2 className="animate-spin h-8 w-8 text-primary" />
                  </div>
                ) : jobs.length === 0 ? (
                  <p>No Jobs available for this qualification.</p>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {jobs.map((job) => (
                      <Card key={job._id} className="bg-background">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl">{job.title}</CardTitle>
                              <CardDescription className="mt-1">{job.location}</CardDescription>
                            </div>
                            <div className="p-2 rounded-full bg-primary/10">
                              <Briefcase className="h-5 w-5 text-primary" />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Salary Range:</span>
                              <span className="font-medium">{job.salary}/month</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Qualification:</span>
                              <span className="font-medium">
                                {job.qualification === "10th"
                                  ? "10th Pass"
                                  : job.qualification === "12th"
                                  ? "12th Pass"
                                  : "No Formal Education"}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <a
                            href={job.roadmap}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <Button className="w-full group">
                              View Roadmap
                              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Button>
                          </a>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="space-y-6">
                {loadingSkills ? (
                  <div className="flex justify-center items-center">
                    <Loader2 className="animate-spin h-8 w-8 text-primary" />
                  </div>
                ) : skills.length === 0 ? (
                  <p>No Skills available at this moment.</p>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                      <Card key={index} className="bg-background">
                        <CardHeader>
                          <CardTitle>{skill.title}</CardTitle>
                          <CardDescription>Duration: {skill.duration}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm">{skill.description}</p>
                        </CardContent>
                        <CardFooter>
                          <a href={skill.link} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button className="w-full group">
                              Enroll Now
                              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Button>
                          </a>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
