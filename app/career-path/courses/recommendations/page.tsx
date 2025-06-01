"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  BookOpen,
  Building,
  Clock,
  DollarSign,
  ArrowUpRight,
  ChevronRight,
  Filter,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Course {
  _id: string;
  title: string;
  institution: string;
  location: string;
  duration: string;
  price: number;
  type: string;
  timeline: string;
  link: string;
}

export default function CoursesRecommendationsPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "mumbai";
  const budget = Number.parseInt(searchParams.get("budget") || "250000");
  const timeline = searchParams.get("timeline") || "short";

  const [filter, setFilter] = useState("all");
  const [courses, setcourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        if (data.success) {
          setcourses(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch courses", error);
      } finally{
        setLoading(false)
      }
    };

    fetchCourses();
  }, []);


  // Filter courses based on parameters
  const filteredCourses = courses.filter((course) => {
    // Filter by budget
    if (course.price > budget) return false;

    // Filter by timeline
    if (timeline === "short" && course.timeline !== "short") return false;
    if (timeline === "long" && course.timeline !== "long") return false;

    // Filter by type if selected
    if (filter !== "all" && course.type !== filter) return false;

    // Filter by city (simplified)
    if (
      city !== "other" &&
      !course.location.toLowerCase().includes(city.toLowerCase()) &&
      !course.location.includes("Online") &&
      !course.location.includes("Pan India")
    )
      return false;

    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 p-4 md:p-8 mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <Link
                href="/career-path/courses"
                className="text-primary hover:underline inline-flex items-center"
              >
                <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                Back to Preferences
              </Link>

              <div className="space-y-2 mt-4">
                <h1 className="text-3xl font-bold">Recommended Courses</h1>
                <p className="text-muted-foreground">
                  Based on your preferences:{" "}
                  {city.charAt(0).toUpperCase() + city.slice(1)}, Budget ₹
                  {(budget / 100000).toFixed(1)} Lakhs, Timeline:{" "}
                  {timeline === "short"
                    ? "Within 3 years"
                    : "More than 3 years"}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter by type:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("all")}
                >
                  All
                </Button>
                <Button
                  variant={filter === "certification" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("certification")}
                >
                  Certification
                </Button>
                <Button
                  variant={filter === "diploma" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("diploma")}
                >
                  Diploma
                </Button>
                <Button
                  variant={filter === "degree" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("degree")}
                >
                  Degree
                </Button>
              </div>
            </div>

            {loading ? (
                  <div className="flex justify-center items-center">
                    <Loader2 className="animate-spin h-8 w-8 text-primary" />
                  </div>
                ) : (filteredCourses.length > 0) ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <Card key={index} className="bg-background">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">
                            {course.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {course.institution}
                          </CardDescription>
                        </div>
                        <div className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {course.type === "certification"
                            ? "Certification"
                            : course.type === "diploma"
                            ? "Diploma"
                            : "Degree"}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{course.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>₹{course.price.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>
                            {course.timeline === "short"
                              ? "Short-term"
                              : "Long-term"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full group">
                          Apply Now
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 space-y-4">
                <h3 className="text-xl font-medium">
                  No courses match your criteria
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or preferences
                </p>
                <Button asChild>
                  <Link href="/career-path/courses">Update Preferences</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
